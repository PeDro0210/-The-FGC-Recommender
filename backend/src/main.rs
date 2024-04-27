use actix_web::{App, HttpResponse, HttpServer, Responder};
mod api;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(api::api_handler::question_sender)
            .service(api::api_handler::game_sender)
            .service(api::api_handler::character_sender)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}

// just for debugging purposes
// #[tokio::main]
// async fn main(){
//     let categories:Vec<String> = vec!["Simulation".to_string(), "Action".to_string(), "Adventure".to_string()];
//     let node = api::query_manager::user_node_creation(categories).await;
//     println!("{:?}", node);
// }