use super::{shop::Shop, Price};
use crate::{get_db_pool, Error};
use sqlx::{postgres::PgRow, FromRow, Row};
use uuid::Uuid;

impl FromRow<'_, PgRow> for Price {
    fn from_row(row: &PgRow) -> sqlx::Result<Price> {
        Ok(Price {
            id: row.get("id"),
            value: row.get("value"),
            shop_id: row.get("shop_id"),
            beverage_id: row.get("beverage_id"),
            shop: Shop {
                id: row.get("shop_id"),
                name: row.get("shop_name"),
            },
        })
    }
}

pub async fn for_beverage(beverage_id: &Uuid) -> Result<Vec<Price>, Error> {
    sqlx::query_as::<_, Price>(
        "
            SELECT p.*, s.name as shop_name
            FROM prices p
            LEFT JOIN shops s on s.id = p.shop_id
            WHERE beverage_id = $1
        ",
    )
    .bind(beverage_id)
    .fetch_all(&get_db_pool().await)
    .await
    .map_err(|err| {
        dbg!(err);
        Error::DbError
    })
}

pub async fn for_shop(shop_id: &Uuid) -> Result<Vec<Price>, Error> {
    sqlx::query_as::<_, Price>(
        "
            SELECT p.*, s.name as shop_name
            FROM prices p
            LEFT JOIN shops s on s.id = p.shop_id
            WHERE shop_id = $1
        ",
    )
    .bind(shop_id)
    .fetch_all(&get_db_pool().await)
    .await
    .map_err(|_| Error::DbError)
}
