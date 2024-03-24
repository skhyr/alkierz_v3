use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct Beverage {
    pub id: Uuid,
    pub name: String,
    pub voltage: f64,
    pub volume: f64,
    pub price: Option<f64>,
}
