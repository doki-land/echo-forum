use super::*;
use crate::{AppError, AppState};

pub struct CategoryKey;

pub type CategoryId = Semantic64<CategoryKey>;

impl SemanticKey for CategoryKey {
    const KEY: &'static str = "category";
}

#[derive(Clone, Debug, PartialEq, Object)]
pub struct CategoryCreate {
    pub color: Option<String>,
    pub name: Option<String>,
    pub link: Option<String>,
    pub description: Option<String>,
}

#[derive(Clone, Debug, PartialEq, Object)]
pub struct CategoryQuery {}

#[derive(Clone, Debug, PartialEq, Object, FromRow)]
pub struct CategoryInfo {
    pub category_id: CategoryId,
    /// The rgba hex color represent.
    pub color: String,
    pub name: String,
    pub link: String,
    pub description: String,
    pub create_time: DateTime<Local>,
    pub create_user: UserId,
    pub update_time: DateTime<Local>,
    pub update_user: UserId,
    pub r#type: i16,
    pub status: i16,
}

#[derive(Clone, Debug, PartialEq, Object, FromRow)]
pub struct CategoryEdit {
    pub category_id: CategoryId,
    pub name: Option<String>,
    pub description: Option<String>,
    pub color: Option<String>,
}

impl CategoryCreate {
    pub async fn create(self, api: &AppState, create_user: UserId) -> Result<CategoryId, AppError> {
        let category_id = CategoryId::now();
        let _ = sqlx::query("SELECT category_create($1,$2,$3,$4,$5,$6)")
            .bind(category_id)
            .bind(self.link.unwrap_or(category_id.to_string()))
            .bind(self.name.unwrap_or(category_id.to_string()))
            .bind(self.description.unwrap_or_default())
            .bind(self.color.unwrap_or("#999999".to_string()))
            .bind(create_user)
            .execute(&api.pg)
            .await?;
        Ok(category_id)
    }
}

impl CategoryQuery {
    pub async fn query(self, api: &AppState, _: UserId) -> Result<Vec<CategoryInfo>, AppError> {
        let categories = sqlx::query_as("SELECT * FROM category_list()").fetch_all(&api.pg).await?;
        Ok(categories)
    }
}

impl CategoryInfo {
    pub async fn get(category_id: CategoryId, api: &AppState) -> Result<CategoryInfo, AppError> {
        let category = sqlx::query_as("SELECT * FROM category_get_by_id($1)").bind(category_id).fetch_one(&api.pg).await?;
        Ok(category)
    }
}

impl CategoryEdit {
    pub async fn update(self, api: &AppState, update_user: UserId) -> Result<u64, AppError> {
        let result = sqlx::query("SELECT category_update($1,$2,$3,$4,$5)")
            .bind(self.category_id)
            .bind(self.name)
            .bind(self.description)
            .bind(self.color)
            .bind(update_user)
            .execute(&api.pg)
            .await?;
        Ok(result.rows_affected())
    }
    pub async fn delete(category_id: CategoryId, api: &AppState) -> Result<u64, AppError> {
        let result = sqlx::query("SELECT category_delete($1)").bind(category_id).execute(&api.pg).await?;
        Ok(result.rows_affected())
    }
}
