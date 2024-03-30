use super::Beverage;
use crate::{get_db_pool, Error};
use uuid::Uuid;

pub async fn all() -> Result<Vec<Beverage>, Error> {
    sqlx::query_as!(
        Beverage,
        "
            SELECT b.*, min(p.value) as price
            FROM beverages b
            LEFT JOIN prices p ON p.beverage_id = b.id
            GROUP BY b.id
        "
    )
    .fetch_all(&get_db_pool().await)
    .await
    .map_err(|_| Error::DbError)
}

pub async fn one(beverage_id: &Uuid) -> Result<Beverage, Error> {
    sqlx::query_as!(
        Beverage,
        "
            SELECT b.*, min(p.value) as price
            FROM beverages b
            LEFT JOIN prices p ON p.beverage_id = b.id
            WHERE b.id = $1
            GROUP BY b.id
        ",
        beverage_id
    )
    .fetch_one(&get_db_pool().await)
    .await
    .map_err(|_| Error::DbError)
}
