#![doc = include_str!("../readme.md")]
#![doc(html_logo_url = "https://raw.githubusercontent.com/oovm/shape-rs/dev/projects/images/Trapezohedron.svg")]
#![doc(html_favicon_url = "https://raw.githubusercontent.com/oovm/shape-rs/dev/projects/images/Trapezohedron.svg")]

pub use crate::errors::{AppError, Result};
use crate::models::{CategoryCreate, CategoryEdit, CategoryId, CategoryInfo, CategoryQuery, UserCreate, UserId};
use poem::{Endpoint, EndpointExt, IntoResponse};
use poem_openapi::{payload::Json, OpenApi, Tags};
use sqlx::{Pool, Postgres};

mod api_getter;
mod database;
mod errors;
mod models;

pub struct AppState {
    pub pg: Pool<Postgres>,
}

#[derive(Tags)]
pub enum AppTags {
    Auth,
    User,
    Category
}

#[OpenApi]
impl AppState {
    /// Register a new user
    #[oai(path = "/user/create", method = "put", tag = "AppTags::User")]
    pub async fn user_create(&self, json: Json<UserCreate>) -> Result<UserId> {
        Ok(Json(json.0.create(self).await?))
    }
    #[oai(path = "/category/create", method = "put", tag = "AppTags::Category")]
    pub async fn category_create(&self, json: Json<CategoryCreate>) -> Result<CategoryId> {
        let user_id = UserId::default();
        Ok(Json(json.0.create(self, user_id).await?))
    }

    #[oai(path = "/category/query", method = "post", tag = "AppTags::Category")]
    pub async fn category_query(&self, json: Json<CategoryQuery>) -> Result<Vec<CategoryInfo>> {
        let user_id = UserId::default();
        Ok(Json(json.0.query(self, user_id).await?))
    }

    #[oai(path = "/category/edit", method = "patch", tag = "AppTags::Category")]
    pub async fn category_edit(&self, json: Json<CategoryEdit>) -> Result<u64> {
        let user_id = UserId::default();
        Ok(Json(json.0.update(self, user_id).await?))
    }

    #[oai(path = "/category/delete", method = "delete", tag = "AppTags::Category")]
    pub async fn category_delete(&self, json: Json<CategoryId>) -> Result<u64> {
        Ok(Json(CategoryEdit::delete(json.0, self).await?))
    }
}
