#![doc = include_str!("../readme.md")]
#![doc(html_logo_url = "https://raw.githubusercontent.com/oovm/shape-rs/dev/projects/images/Trapezohedron.svg")]
#![doc(html_favicon_url = "https://raw.githubusercontent.com/oovm/shape-rs/dev/projects/images/Trapezohedron.svg")]

pub use crate::errors::{AppError, Result};
use crate::models::{CategoryCreate, CategoryEdit, CategoryId, CategoryInfo, CategoryQuery, TopicCreate, TopicEdit, TopicId, TopicInfo, TopicQuery, UserCreate, UserId};
use poem::{Endpoint, EndpointExt, IntoResponse, Route};
use poem_openapi::{payload::Json, OpenApi, OpenApiService, Tags};
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
    Category,
    Topic
}

#[OpenApi]
impl AppState {
    /// Create new user with password
    #[oai(path = "/user/create", method = "put", tag = "AppTags::User")]
    pub async fn user_create(&self, json: Json<UserCreate>) -> Result<UserId> {
        Ok(Json(json.0.create(self).await?))
    }

    /// Create new category
    #[oai(path = "/category/create", method = "put", tag = "AppTags::Category")]
    pub async fn category_create(&self, json: Json<CategoryCreate>) -> Result<CategoryId> {
        let user_id = UserId::default();
        Ok(Json(json.0.create(self, user_id).await?))
    }

    /// Query category info
    #[oai(path = "/category/query", method = "post", tag = "AppTags::Category")]
    pub async fn category_query(&self, json: Json<CategoryQuery>) -> Result<Vec<CategoryInfo>> {
        let user_id = UserId::default();
        Ok(Json(json.0.query(self, user_id).await?))
    }

    /// Edit category info
    #[oai(path = "/category/edit", method = "patch", tag = "AppTags::Category")]
    pub async fn category_edit(&self, json: Json<CategoryEdit>) -> Result<u64> {
        let user_id = UserId::default();
        Ok(Json(json.0.update(self, user_id).await?))
    }

    /// Delete category info
    #[oai(path = "/category/delete", method = "delete", tag = "AppTags::Category")]
    pub async fn category_delete(&self, json: Json<CategoryId>) -> Result<u64> {
        Ok(Json(CategoryEdit::delete(json.0, self).await?))
    }

    /// Create new topic
    #[oai(path = "/topic/create", method = "put", tag = "AppTags::Topic")]
    pub async fn topic_create(&self, json: Json<TopicCreate>) -> Result<TopicId> {
        let user_id = UserId::default();
        Ok(Json(json.0.create(self, user_id).await?))
    }

    /// Query topic info
    #[oai(path = "/topic/query", method = "post", tag = "AppTags::Topic")]
    pub async fn topic_query(&self, json: Json<TopicQuery>) -> Result<Vec<TopicInfo>> {
        let user_id = UserId::default();
        Ok(Json(json.0.query(self, user_id).await?))
    }

    /// Edit topic
    #[oai(path = "/topic/edit", method = "patch", tag = "AppTags::Topic")]
    pub async fn topic_edit(&self, json: Json<TopicEdit>) -> Result<u64> {
        let user_id = UserId::default();
        Ok(Json(json.0.update(self, user_id).await?))
    }

    /// Delete topic
    #[oai(path = "/topic/delete", method = "delete", tag = "AppTags::Topic")]
    pub async fn topic_delete(&self, json: Json<TopicId>) -> Result<u64> {
        Ok(Json(TopicEdit::delete(json.0, self).await?))
    }
}
