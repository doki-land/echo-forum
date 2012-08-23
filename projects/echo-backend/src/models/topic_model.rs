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
