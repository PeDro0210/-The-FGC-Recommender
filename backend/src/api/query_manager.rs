use actix_web::web::Json;
use neo4rs::{query, Graph};
use crate::api::queries_structs_endpoint::*;
use std::env:: var;
use std::hash::{self, Hasher, Hash};
use dotenv::dotenv;
use std::time::{SystemTime, UNIX_EPOCH};
use std::collections::HashMap;


pub async fn start_driver() -> Graph  { //returns the driver
    dotenv().ok();
    let uri = var("NEO4J_URI").unwrap();
    let user = var("NEO4J_USERNAME").expect("NEO4J_USER must be set");
    let password = var("NEO4J_PASSWORD").expect("NEO4J_PASSWORD must be set");
    let driver = Graph::new(uri, user, password).await.unwrap_or_else(|_| panic!("Could not connect to the database"));

    return driver;
}

fn hasher_function(categories: Vec<String>) -> String {
    let mut hasher = hash::DefaultHasher::new(); // Create a new hasher
    // Hash the categories concatenated
    let current_time = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs();
    for category in categories {
        category.hash(&mut hasher);
    }
    current_time.hash(&mut hasher);
    let hash_value = hasher.finish();
    return hash_value.to_string();
}

// creates a user node in the database that is has a Like relationship with the categories
// * the function is public for testing purposes
// TODO: Change the function to private when done testing
pub async fn user_node_creation(categories: Vec<String>) -> String {
    let graph = start_driver().await;


    let userhash = "U".to_string() + &hasher_function(categories.clone());
    let returning_userhash:String = userhash.clone();
    let userhash_iter = userhash.clone();


    let mut result = graph.execute(query("CREATE (u:User {name: $name}) RETURN u").param("name", userhash))
        .await.unwrap();

    let _ = result.next().await; //best line of code ever fucking invented


    // TODO: optimize later for sending it as one query. But not now, when everything is done optimize it 
    for category in categories {
        let mut result = graph.execute(query("
        MERGE (u:User {name: $name}) 
        MERGE (category1:Label {name: $category})
        MERGE (u)-[:LIKES]->(category1)
        RETURN u, category1
        ")
            .param("name",  userhash_iter.clone())
            .param("category", category))
            .await.unwrap();
        let _ = result.next().await;
    }

    return returning_userhash;

}

// Makes a query for content-based filtering using jaccard similarity with the created user node
// * public for testing
// TODO: Change when testing done
pub async fn jaccard_similarity_query(userhash: String) -> Vec<HashMap<String, String>>  {
    let graph = start_driver().await;
    let mut game_vec = Vec::new();
    
    // Fuck this big ass query (bromis te amo)
    let mut games = graph.execute(query("MATCH (User{name:$user})-[:LIKES]->(l:Label)<-[:BELONGS_TO]-(j:Reconode) 
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
    WHERE jaccard > 0.90
    
    WITH collect(JuegosUsuario2) AS AllJuegosUsuario2
    
    WITH reduce(s = [], x IN AllJuegosUsuario2 | s + x) AS UnionJuegosUsuario2
    
    MATCH (game:Reconode)
    WHERE game.name IN UnionJuegosUsuario2
    RETURN game")
    .param("user", userhash))
    .await.unwrap();
    
    loop {
        // Calls the next game (dunno why it works like that, but OK)
        let mut result = games.next().await.unwrap(); //I know this is mutable, but fuckint rust-analyzer doesnt say so
        match result {
            Some(result) => {
                let game = result.get::<HashMap<String, String>>("game").unwrap(); // unwraps the games
                game_vec.push(game);
            },
            None => break,
        }
    }
    return game_vec;

}

// Gets the games (like it ain't rocket science)
pub async fn get_games(categories: Vec<String>) -> Vec<Game> {
    let userhash = user_node_creation(categories).await;
    let games = jaccard_similarity_query(userhash).await;
    
    let mut games_vec: Vec<Game> = Vec::new();

    // Unoptimized as shit, but it works
    for game in games {
        games_vec.push(Game{name: game.get("name").unwrap().to_string(), image_url: "image_url".to_string()});
    }
 
    return games_vec;
}

// Fetches the characters from the DB based on the game name and archetype
pub async fn get_characters_from_game(game_name: String, arhetype: Vec<String>) -> Json<Character> { //returns the characters
// TODO: Fetch the characters from the DB based on the game name and archetype
    return Json(Character{name: "character_name".to_string(), image_url: "image_url".to_string()});
}