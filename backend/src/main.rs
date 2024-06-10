use actix_web::{App, HttpServer, middleware::Logger, http};
use actix_cors::Cors;
mod api;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Server is running on http://localhost:8080");
    HttpServer::new(|| {
        let cors = Cors::default()
            .allowed_origin("http://localhost:3000")
            .allowed_methods(vec!["GET", "POST"])
            .allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT])
            .max_age(3600);

        App::new()
            .wrap(cors)
            .wrap(Logger::default())
            .service(api::api_handler::question_sender)
            .service(api::api_handler::game_sender)
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}

