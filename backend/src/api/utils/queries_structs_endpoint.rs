#[derive(serde::Serialize)]
#[derive(Debug)]
pub struct Character{
    pub name : String,
    pub image_url: String
}

// TODO: see how to structure this Json
#[derive(serde::Serialize)]
pub struct Questions{
    pub list_of_quetions : Vec<String>,
    pub list_of_answers : Vec<String>
}

#[derive(serde::Serialize)]
#[derive(Debug)]
pub struct Game{
    pub name : String,
    pub image_url: String
}

