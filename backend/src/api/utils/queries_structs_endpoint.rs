use serde::Deserialize;

#[derive(serde::Serialize)]
#[derive(Debug)]
pub struct Character{
    pub name : String,
    pub image_url: String
}

#[derive(serde::Serialize)]
#[derive(Debug)]
pub struct Game{
    pub name : String,
    pub image_url: String,
    pub characters: Vec<Character>
}

#[derive(Deserialize)]
pub struct PathInfo {
    pub categories: String,
    pub archetypes: String,
}
