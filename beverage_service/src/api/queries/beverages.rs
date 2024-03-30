use crate::queries::beverage as beverage_queries;
use crate::queries::price as price_queries;
use actix_web::{
    get,
    web::{self, Path},
    HttpResponse, Responder, Scope,
};
use uuid::Uuid;

pub fn service() -> Scope {
    web::scope("/beverages")
        .service(all)
        .service(one)
        .service(prices)
}

#[get("/")]
pub async fn all() -> impl Responder {
    match beverage_queries::query_all().await {
        Ok(res) => HttpResponse::Ok().json(res),
        Err(_) => HttpResponse::InternalServerError().finish(),
    }
}

#[get("/{id}")]
pub async fn one(id: Path<Uuid>) -> impl Responder {
    match beverage_queries::query_one(&id.into_inner()).await {
        Ok(res) => HttpResponse::Ok().json(res),
        Err(_) => HttpResponse::InternalServerError().finish(),
    }
}

#[get("/{id}/prices")]
pub async fn prices(id: Path<Uuid>) -> impl Responder {
    match price_queries::query_for_beverage(&id.into_inner()).await {
        Ok(res) => HttpResponse::Ok().json(res),
        Err(_) => HttpResponse::InternalServerError().finish(),
    }
}
