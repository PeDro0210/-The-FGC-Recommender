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