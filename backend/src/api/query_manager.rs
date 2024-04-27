use actix_web::web::Json;
use neo4rs::{query, Graph};
use crate::api::queries_structs_endpoint::*;
use std::env:: {var,vars};
use std::hash::{self, Hasher, Hash};
use dotenv::dotenv;
use std::time::{SystemTime, UNIX_EPOCH};


pub async fn start_driver() -> Graph  { //returns the driver
    dotenv().ok();
    let uri = var("NEO4J_URI").unwrap();
    let user = var("NEO4J_USERNAME").expect("NEO4J_USER must be set");
    let password = var("NEO4J_PASSWORD").expect("NEO4J_PASSWORD must be set");
    let driver = Graph::new(uri, user, password).await.unwrap_or_else(|_| panic!("Could not connect to the database"));

    { 
        assert!(driver.run(query("RETURN 1")).await.is_ok());
    
        let mut result = driver
            .execute(
                query("CREATE (friend:Person {name: $name}) RETURN friend").param("name", "Mr Mark"),
            )
            .await
            .unwrap();
    return driver;
    }
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
pub async fn user_node_creation(categories: Vec<String>) -> User {
    let graph = start_driver().await;

    let categories_for_hash = categories.clone();
    let userhash = "U".to_string() + &hasher_function(categories.clone());
    let userhash_iter = userhash.clone();


    let mut result = graph.execute(query("CREATE (u:User {name: $name}) RETURN u").param("name", userhash))
        .await.unwrap();


    let _ = result.next().await; //best line of code ever invented

    for category in categories {
        let mut result = graph.execute(query("
        MERGE (u:User {name: $name}) 
        MERGE (category1:Label {name: $category})
        MERGE (u)-[:Likes]->(category1)
        RETURN u, category1
        ")
            .param("name",  userhash_iter.clone())
            .param("category", category))
            .await.unwrap();
        let _ = result.next().await;
    }

    return User{userhash: hasher_function(categories_for_hash.clone())};

}

// Makes a query for content-based filtering using jaccard similarity with the created user node
// TODO: see if Json works out of the box
async fn jaccard_similarity_query() -> Json<Game> { //returns the games
    // TODO: Implement the query logic here
    return Json(Game{name: "game_name".to_string(), image_url: "image_url".to_string()});
}

// Fetches the questions from the database
async fn get_questions() -> Json<Questions> { //returns the questions
// TODO: Fetch the questions from the node Questions with there answears and category for each answears.
    return Json(Questions{list_of_quetions: vec!["question1".to_string(), "question2".to_string()], list_of_answers: vec!["answer1".to_string(), "answer2".to_string()]});
}

// Fetches the characters from the DB based on the game name and archetype
async fn get_characters_from_game(game_name: String, arhetype: Vec<String>) -> Json<Character> { //returns the characters
// TODO: Fetch the characters from the DB based on the game name and archetype
    return Json(Character{name: "character_name".to_string(), image_url: "image_url".to_string()});
}