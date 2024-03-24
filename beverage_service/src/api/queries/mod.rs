use actix_web::{ web, Scope};
mod beverages;

pub fn service() -> Scope {
    web::scope("")
        .service(beverages::service())
}

