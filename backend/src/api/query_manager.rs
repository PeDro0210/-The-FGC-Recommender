use actix_web::web::Json;


// Create a temp node, with the connections
fn temp_node_query_creator(categories_selected:Vec<String>) -> String  {
//TODO: Create the cipher query for creating a temp node, with a HASH for the id (using a HASHFunction). make it dynamic for connecting to the label nodes
}

// Makes a query for content-based filtering using jaccard similarity
// TODO: see if Json works out of the box
fn jaccard_similarity_query(categories_selected: Vec<String>) -> Vec<Json<String>> {
    // TODO: Implement the query logic here
}

// Fetches the questions from the database
fn get_questions() -> Vec<Json<String>> {
// TODO: Fetch the questions from the node Questions with there answears and category for each answears.
}

// Fetches the characters from the DB based on the game name and archetype
fn get_characters_from_game(game_name: String, arhetype: Vec<String>) -> Vec<Json<String>> {
// TODO: Fetch the characters from the DB based on the game name and archetype
}