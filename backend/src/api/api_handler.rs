use actix_web::{get, web::{self, Json}, HttpResponse, Responder};
use crate::api::query_manager;
use crate::api::utils::queries_structs_endpoint::{Game, Character};

// In charge of parsing the HTTP requests and sending the responses

#[get("/GetQuestions")]
pub async fn question_sender() -> impl Responder {
    //TODO: return a JSON with the structure of the questions
    HttpResponse::Ok().body("Question Sender")
}

// when calling the HTTP request, the user will have to pass the categories as a list of strings in this way
// /GetGames/Categories1/Categories2/Categories3
#[get("/GetGames/{categories:.*}")]
// Function that sends Json objects of games based in Jaccard Similarity algorithm
pub async fn game_sender(categories: web::Path<Vec<String>>) -> impl Responder {
    let categories_list: Vec<String> = categories.into_inner().join("/").split('/').map(|s| s.to_string()).collect();
    println!("{:?}", categories_list);
    let game_vector = query_manager::get_games(categories_list).await;
    
    let game_json:Json<Vec<Game>> = Json(game_vector);

    HttpResponse::Ok().json(game_json)
    
}

// when calling the HTTP request, the user will have to pass the game name and archetype as a list of strings in this way
// /GetCharacters/GameName/Archetype1/Archetype2/Archetype3
#[get("/GetCharacters/{game_name}/{archetypes:.*}")]
// Function that sends Json objects of characters based on the game name and archetype asked
pub async fn character_sender(path: web::Path<(String, String)>) -> impl Responder {
    let (game_name, archetypes) = path.into_inner();
    println!("{}, {}", game_name, archetypes);
    let archetypes_list: Vec<String> = archetypes.split('/').map(|s| s.to_string()).collect();
    let characther_vector = query_manager::get_characters(game_name, archetypes_list).await;

    let character_json:Json<Vec<Character>> = Json(characther_vector);

    HttpResponse::Ok().json(character_json)
}



