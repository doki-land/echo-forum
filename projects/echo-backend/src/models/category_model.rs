use super::*;
use crate::{AppError, AppState};

pub struct CategoryKey;

pub type CategoryId = Semantic64<CategoryKey>;

impl SemanticKey for CategoryKey {
    const KEY: &'static str = "category";
}

#[derive(Clone, Debug, PartialEq, Object, FromRow)]
pub struct CategoryCreate {
    pub color: Option<i32>,
    pub name: Option<String>,
    pub link: Option<String>,
    pub description: Option<String>,
}

#[derive(Clone, Debug, PartialEq, Object, FromRow)]
pub struct CategoryInfo {
    pub category_id: CategoryId,
    /// The rgba hex color represent.
    pub color: i32,
    pub name: String,
    pub link: String,
    pub description: String,
    pub create_time: DateTime<Local>,
    pub create_user: UserId,
    pub update_time: DateTime<Local>,
    pub update_user: UserId,
}

#[derive(Clone, Debug, PartialEq, Object, FromRow)]
pub struct CategoryEdit {
    pub category_id: CategoryId,
    pub name: Option<String>,
    pub description: Option<String>,
    pub create_time: Option<DateTime<Local>>,
    pub create_user: Option<UserId>,
    pub update_time: Option<DateTime<Local>>,
    pub update_user: Option<UserId>,
    pub link: Option<String>,
}

impl CategoryCreate {
    pub async fn create(self, api: &AppState) -> Result<UserId, AppError> {
        let user_id = UserId::now();
        let _ = sqlx::query("SELECT user_create($1,$2,$3,$4)")
            .bind(user_id)
            .bind(self.user_name)
            .bind(self.nick_name)
            .bind(self.password)
            .execute(&api.pg)
            .await?;
        Ok(user_id)
    }
}
