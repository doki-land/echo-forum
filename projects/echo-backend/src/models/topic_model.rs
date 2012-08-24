use super::*;


pub struct TopicKey;

pub type TopicId = Semantic64<TopicKey>;

impl SemanticKey for TopicKey {
    const KEY: &'static str = "topic";
}

#[derive(Clone, Debug, PartialEq, Object, FromRow)]
pub struct TopicInfo {
    pub topic_id: TopicId,
    pub link: String,
    pub name: String,
    pub description: String,
    pub create_time: DateTime<Local>,
    pub create_user: UserId,
    pub update_time: DateTime<Local>,
    pub update_user: UserId,
}

#[derive(Clone, Debug, PartialEq, Object)]
pub struct TopicEdit {
    pub topic_id: TopicId,
    pub link: Option<String>,
    pub name: Option<String>,
    pub description: Option<String>,
}

#[derive(Clone, Debug, PartialEq, Object)]
pub struct TopicCreate {
    pub link: String,
    pub name: String,
    pub description: String,
}

#[derive(Clone, Debug, PartialEq, Object)]
pub struct TopicQuery {}

impl TopicCreate {
    pub async fn create(self, app: &AppState, who: UserId) -> Result<TopicId, AppError> {
        let topic_id = TopicId::now();
        let _ = sqlx::query("SELECT topic_create($1, $2, $3, $4, $5)")
            .bind(topic_id)
            .bind(self.link)
            .bind(self.name)
            .bind(self.description)
            .bind(who)
            .execute(&app.pg)
            .await?;
        Ok(topic_id)
    }
}

impl TopicEdit {
    pub async fn update(self, app: &AppState, who: UserId) -> Result<u64, AppError> {
        let rows = sqlx::query("SELECT topic_update($1, $2, $3, $4)")
            .bind(self.topic_id)
            .bind(self.link)
            .bind(self.name)
            .execute(&app.pg)
            .await?
            .rows_affected();
        Ok(rows)
    }

    pub async fn delete(topic_id: TopicId, app: &AppState) -> Result<u64, AppError> {
        let rows = sqlx::query("SELECT topic_delete($1)").bind(topic_id).execute(&app.pg).await?.rows_affected();
        Ok(rows)
    }
}

impl TopicQuery {
    pub async fn query(self, app: &AppState, _who: UserId) -> Result<Vec<TopicInfo>, AppError> {
        let topics = sqlx::query_as("SELECT * FROM topic_list()").fetch_all(&app.pg).await?;
        Ok(topics)
    }
}
