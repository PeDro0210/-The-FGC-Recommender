use actix_web::{get, App, HttpResponse, HttpServer, Responder,web};


//Boiler Plate code
#[derive(serde::Serialize)]
struct Message {
    message: String,
}

// Boiler Plate code
#[get("/")]
async fn hello() -> impl Responder {
    let data = web::Json(Message {
        message: "Hello, world!".to_string(),
    });
    HttpResponse::Ok().json(data)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(hello)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}