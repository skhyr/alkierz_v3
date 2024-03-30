mod model;
mod repo;
mod shop;

use crate::Error;
use uuid::Uuid;

pub use model::Price;

pub async fn query_for_beverage(beverage_id: &Uuid) -> Result<Vec<Price>, Error> {
    let res = repo::for_beverage(beverage_id).await;
    dbg!(&res);
    res
}

pub async fn query_for_shop(shop_id: &Uuid) -> Result<Vec<Price>, Error> {
    repo::for_shop(shop_id).await
}
