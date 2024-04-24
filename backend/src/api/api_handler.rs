use actix_web::{get, Responder, web};

use crate::api::query_manager::*;
use crate::api::queries_structs_endpoint::*;


#[get("/GetQuestions")]
// Function that sends Json objects of questions
pub fn question_sender() -> impl Responder {
    //TODO: return a JSON with the structure of the questions

}

// when calling the HTTP request, the user will have to pass the categories as a list of strings in this way
// ?categories=category1&categories=category2&categories=category3
#[get("/GetGames/<categories..>")]
// Function that sends Json objects of games based in Jaccard Similarity algorithm
pub fn game_sender(categories: web::Path<Vec<String>>) -> impl Responder {
    // TODO: return a Vector of JSON with the structure of the games
}

// when calling the HTTP request, the user will have to pass the game name and archetype as a list of strings in this way
// ?game_name=game_name&archetype=archetype1&archetype=archetype2&archetype=archetype3
#[get("/GetCharacters/<game_name>/<archetype..>")]
// Function that sends Json objects of characters based on the game name and archetype asked
pub fn character_sender(game_name: web::Path<String>, archetype: web::Path<Vec<String>>) -> impl Responder {
    // TODO: return a Vector of JSON with the structure of the characters
}

