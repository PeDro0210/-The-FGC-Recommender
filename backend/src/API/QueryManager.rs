use actix_web::web::Json;

#[derive(serde::Serialize)]
struct Character{
    name : String,
    image_url: String
}

#[derive(serde::Serialize)]
struct Questions{
    list_of_quetions : Vec<String>
}

#[derive(serde::Serialize)]
struct Game{
    name : String,
    image_url: String
}


// Create a temp node, with the connections
fn TempNodeQueryCreator(categories_selected:Vec<String>) -> String  {
//TODO: Create the cipher query for creating a temp node, with a HASH for the id (using a HASHFunction). make it dynamic for connecting to the label nodes
}

// Makes a query for content-based filtering using jaccard similarity
// TODO: see if Json works out of the box
fn JaccardSimilarityQuery(categories_selected: Vec<String>) -> Vec<Json> {
    // TODO: Implement the query logic here
}

// Fetches the questions from the database
fn GetQuestions() -> Vec<Json> {
// TODO: Fetch the questions from the node Questions with there answears and category for each answears.
}

// Fetches the characters from the DB based on the game name and archetype
fn GetCharactersFromGame(game_name: String, arhetype: Vec<String>) -> Vec<Json> {
// TODO: Fetch the characters from the DB based on the game name and archetype
}