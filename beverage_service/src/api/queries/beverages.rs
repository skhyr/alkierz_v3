use actix_web::{get, web::{self, Path}, HttpResponse, Responder, Scope};
use uuid::Uuid;
use crate::queries::beverage;

pub fn service() -> Scope {
    web::scope("/beverages")
        .service(all)
        .service(one)
}

#[get("/")]
pub async fn all() -> impl Responder {
    match beverage::query_all().await {
        Ok(res) => HttpResponse::Ok().json(res),
        Err(_) => HttpResponse::InternalServerError().finish()
    }
}

#[get("/{id}")]
pub async fn one(id: Path<Uuid>) -> impl Responder {
    match beverage::query_one(&id.into_inner()).await {
        Ok(res) => HttpResponse::Ok().json(res),
        Err(_) => HttpResponse::InternalServerError().finish()
    }
}


