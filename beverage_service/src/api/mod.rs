use actix_cors::Cors;
use actix_web::{get, web, Responder, Scope};
use actix_web::{App, HttpServer};
use dotenv::dotenv;

mod queries;

pub async fn serve() -> std::io::Result<()> {
    dotenv().ok();
    print!("Starting server");

    HttpServer::new(move || {
        let cors = Cors::permissive();

        App::new().wrap(cors).service(service())
    })
    .bind(("0.0.0.0", 8000))?
    .run()
    .await
}

pub fn service() -> Scope {
    web::scope("/api")
        .service(status_check)
        .service(queries::service())
}

#[get("/health/")]
pub async fn status_check() -> impl Responder {
    "live"
}
