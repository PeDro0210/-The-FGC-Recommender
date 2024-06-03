use actix_web::{get, web::{self, Json}, HttpResponse, Responder};
use serde_json::Value;
use crate::api::query_manager;
use crate::api::utils::queries_structs_endpoint::{Game, PathInfo};
use crate::api::questions_manager::question_reader::read_schema;
// In charge of parsing the HTTP requests and sending the responses


#[get("/GetQuestions")]
pub async fn question_sender() -> impl Responder {
    let questions = read_schema("src/api/questions_manager/Questions.json").unwrap();
    let questions_json:Json<Value> = Json(questions);

    HttpResponse::Ok().json(questions_json)
}

// when calling the HTTP request, the user will have to pass the categories as a list of strings in this way
// /GetGames/Categories1/Categories2/Categories3
#[get("/GetGames/{categories:.*}/{archetypes:.*}")]
// Function that sends Json objects of games based in Jaccard Similarity algorithm
pub async fn game_sender(path: web::Path<PathInfo>) -> impl Responder {
    let categories: Vec<String> = path.categories.split(',').map(|s| s.to_string()).collect();
    let archetypes: Vec<String> = path.archetypes.split(',').map(|s| s.to_string()).collect();
    let game_vector = query_manager::get_games(categories, archetypes).await;
    
    let game_json: Json<Vec<Game>> = Json(game_vector);

    HttpResponse::Ok().json(game_json)
    
}





