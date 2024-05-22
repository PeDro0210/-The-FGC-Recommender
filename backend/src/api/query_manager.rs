
use crate::api::utils::queries_structs_endpoint::*;
use crate::api::utils::hasher::hasher_function;

use neo4rs::{query, Graph};
use std::env:: var;
use dotenv::dotenv;
use std::collections::HashMap;




pub async fn start_driver() -> Graph  { //returns the driver
    dotenv().ok();
    let uri = var("NEO4J_URI").unwrap();
    let user = var("NEO4J_USERNAME").expect("NEO4J_USER must be set");
    let password = var("NEO4J_PASSWORD").expect("NEO4J_PASSWORD must be set");
    let driver = Graph::new(uri, user, password).await.unwrap_or_else(|_| panic!("Could not connect to the database"));

    return driver;
}

// creates a user node in the database that is has a Like relationship with the categories
// * the function is public for testing purposes
async fn user_node_creation(categories: Vec<String>) -> String {
    let graph = start_driver().await;


    let userhash = "U".to_string() + &hasher_function(categories.clone());
    let returning_userhash:String = userhash.clone();
    let userhash_iter = userhash.clone();


    let mut result = graph.execute(query("CREATE (u:User {name: $name}) RETURN u").param("name", userhash))
        .await.unwrap();

    let _ = result.next().await; //best line of code ever fucking invented


    let mut result = graph.execute(query("
    WITH $categories AS categories
    MERGE (u:User {name: $name})
    WITH u, categories
    UNWIND categories AS category
    MERGE (category1:Label {name: category})
    MERGE (u)-[:LIKES]->(category1)
    RETURN u, collect(category1) AS categories
    ")
        .param("name",  userhash_iter.clone())
        .param("categories", categories))
        .await.unwrap();
    let _ = result.next().await;

    return returning_userhash;

}

// Makes a query for content-based filtering using jaccard similarity with the created user node
// * public for testing
async fn jaccard_similarity_query(userhash: String, archetypes: Vec<String>) -> Vec<Game>  {
    let graph = start_driver().await;
    let mut game_vec = Vec::new();
    
    // Fuck this big ass query (bromis te amo)
    // The query in the nutshell returns all the game of the set of users that have a jaccard coeffiecient over 75%
    let mut games = graph.execute(query
    ("MATCH (User{name:$user})-[:LIKES]->(l:Label)<-[:BELONGS_TO]-(j:Reconode) 
    WITH collect(DISTINCT j.name) AS JuegosUsuario1  
    
    MATCH (u2:User)-[:LIKES]->(:Label)<-[:BELONGS_TO]-(j2:Reconode)
    WITH u2, JuegosUsuario1, collect(DISTINCT j2.name) AS JuegosUsuario2
    
    WITH u2, JuegosUsuario1, JuegosUsuario2,
         size(apoc.coll.intersection(JuegosUsuario1, JuegosUsuario2)) AS intersection,
         size(apoc.coll.union(JuegosUsuario1, JuegosUsuario2)) AS union,
         size(JuegosUsuario1) AS size1,
         size(JuegosUsuario2) AS size2
    
    WITH u2, JuegosUsuario1, JuegosUsuario2,
         intersection, union, size1, size2,
         intersection * 1.0 / union AS jaccard
    WHERE jaccard > 0.95
    
    WITH collect(JuegosUsuario2) AS AllJuegosUsuario2
    
    WITH reduce(s = [], x IN AllJuegosUsuario2 | s + x) AS UnionJuegosUsuario2
    
    MATCH (game:Reconode)
    WHERE game.name IN UnionJuegosUsuario2
    WITH game, rand() as r
    ORDER BY r
    RETURN game LIMIT 10;")
    .param("user", userhash))
    .await.unwrap();
    
    loop {
        // Calls the next game (dunno why it works like that, but OK)
        let result = games.next().await.unwrap(); //I know this is mutable, but fuckint rust-analyzer doesnt say so
        match result {
            Some(result) => {
                let game = result.get::<HashMap<String, String>>("game").unwrap(); // unwraps the games
                // Object structure for characters, with there keys for getting the info
                let game_parsed = Game{
                    name: game.get("name").unwrap().to_string(), 
                    image_url: game.get("image_link").unwrap().to_string(),
                    characters: fetching_characters(game.get("name").unwrap().to_string(), archetypes.clone()).await // Await the fetching_characters function call with cloned archetypes

                };
                println!("{:?}", game_vec); // Use {:?} instead of {:} to print the game_vec vector
                game_vec.push(game_parsed);
            },
            None => break,
        }
    }
    return game_vec;

}

// Fetches the characters from the DB based on the game name and archetype
// TODO: comment this
pub async fn fetching_characters(game_name: String, archetypes: Vec<String>) -> Vec<Character> { //returns vec of characters
    let graph = start_driver().await;
    let mut character_vec:Vec<Character> = Vec::new();

    // Simple ass query
    // Is just to simple to over explain
    let mut result = graph.execute(query("
    MATCH (u:Character)-[:From]->(t:Reconode{name:$game})
    WHERE ANY(archetype IN u.archetypes WHERE archetype IN $archetypes)
    RETURN u.name, u.image_link
        ")
        .param("game",game_name)
        .param("archetypes",archetypes))
        .await.unwrap();

        loop {
            // Calls the next game (dunno why it works like that, but OK)
            let result = result.next().await.unwrap(); //I know this is mutable, but fucking rust-analyzer doesnt say so
            match result {
                Some(result) => {
                    // Object structure for characters, with there keys for getting the info
                    let character = Character {
                        name: result.get::<String>("u.name").unwrap(),
                        image_url: result.get::<String>("u.image_link").unwrap(),
                    };
                    character_vec.push(character);
                },
                None => break,
            }
        }

    return character_vec
}


// Gets the games (like it ain't rocket science)
pub async fn get_games(categories: Vec<String>, arhetypes: Vec<String>) -> Vec<Game> {
    let userhash = user_node_creation(categories).await;
    return jaccard_similarity_query(userhash,arhetypes).await
}
