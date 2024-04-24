use actix_web::web::Json;

use crate::api::queries_structs_endpoint::*;

fn start_driver() -> neo4j::Driver { //returns the driver
    //TODO: Create a connection to the database
}

// Create a temp node, with the connections
fn user_node_query_creator(categories_selected:Vec<String>) -> String  {//returns the hash of the user node
//TODO: Create the cipher query for creating a user node, with a HASH for the id (using a HASHFunction). make it dynamic for connecting to the label nodes
}

// Makes a query for content-based filtering using jaccard similarity with the created user node
// TODO: see if Json works out of the box
fn jaccard_similarity_query() -> Json<Game> { //returns the games
    // TODO: Implement the query logic here
}

// Fetches the questions from the database
fn get_questions() -> Json<Questions> { //returns the questions
// TODO: Fetch the questions from the node Questions with there answears and category for each answears.
}

// Fetches the characters from the DB based on the game name and archetype
fn get_characters_from_game(game_name: String, arhetype: Vec<String>) -> Json<Character> { //returns the characters
// TODO: Fetch the characters from the DB based on the game name and archetype
}