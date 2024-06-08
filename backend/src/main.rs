use actix_web::{App, HttpServer};
use actix_cors::Cors;
mod api;

#[actix_web::main]
async fn main() -> std::io::Result<()> { //Setting route services
    HttpServer::new(|| {
        // Fucking CORS
        let cors = Cors::permissive();
        App::new()
            .wrap(cors)
            .service(api::api_handler::question_sender)
            .service(api::api_handler::game_sender)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
