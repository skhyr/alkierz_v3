use actix_web::{App, HttpServer};
use dotenv::dotenv;
use actix_cors::Cors;
use actix_web::{get, web, Responder, Scope};

mod queries;

pub async fn serve() -> std::io::Result<()> {
    dotenv().ok();
    print!("Starting server");

    HttpServer::new(move || {
        let cors = Cors::permissive();

        App::new()
            .wrap(cors)
            .service(service())
    })
    .bind(("0.0.0.0", 8000))?
    .run()
    .await
}

pub fn service() -> Scope {
    web::scope("/api/v1")
        .service(status_check)
        .service(queries::service())
}

#[get("/status")]
pub async fn status_check() -> impl Responder {
    "live"
}

