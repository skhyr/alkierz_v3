mod api;
mod commands;
mod queries;

use sqlx::{postgres::PgPoolOptions, Pool, Postgres};
use std::sync::OnceLock;

#[derive(Debug)]
pub enum Error {
    LLMServiceError(&'static str),
    ParsingError(&'static str),
    DbError,
}

use dotenv::dotenv;
pub type Db = Pool<Postgres>;

static DB_POOL: OnceLock<Pool<Postgres>> = OnceLock::new();
async fn get_db_pool() -> Pool<Postgres> {
    DB_POOL.get().expect("Db Error").clone()
}

#[tokio::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();

    let db_url = std::env::var("DATABASE_URL").unwrap();
    let db_pool = PgPoolOptions::new()
        .max_connections(20)
        .connect(&db_url)
        .await
        .unwrap();
    let _ = DB_POOL.set(db_pool);

    api::serve().await
}
