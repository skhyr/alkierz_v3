mod model;
mod repo;

use crate::Error;
use uuid::Uuid;

pub use model::Beverage;

pub async fn query_all() -> Result<Vec<Beverage>, Error> {
    repo::all().await
}

pub async fn query_one(beverage_id: &Uuid) -> Result<Beverage, Error> {
    repo::one(beverage_id).await
}
