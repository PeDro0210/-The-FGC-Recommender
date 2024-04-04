use actix_web::{get, App, HttpResponse, HttpServer, Responder};
use neo4rs::*;

//Boiler Plate code
#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        //TODO: Add the service to the server
        App::new()
            .service(hello) //boilerplate code
    })
    .bind(("127.0.0.1", 8080))? //change later to the actual address of the server
    .run()
    .await
}