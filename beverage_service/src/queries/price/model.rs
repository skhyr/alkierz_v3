use serde::{Deserialize, Serialize};
use sqlx::prelude::FromRow;
use uuid::Uuid;

use super::shop::Shop;

#[derive(Debug, Serialize, Deserialize)]
pub struct Price {
    pub id: Uuid,
    pub value: f64,
    pub shop_id: Uuid,
    pub beverage_id: Uuid,
    pub shop: Shop,
}
