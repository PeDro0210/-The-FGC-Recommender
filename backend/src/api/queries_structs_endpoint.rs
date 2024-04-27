#[derive(serde::Serialize)]
pub struct Character{
    pub name : String,
    pub image_url: String
}

#[derive(serde::Serialize)]
pub struct Questions{
    pub list_of_quetions : Vec<String>,
    pub list_of_answers : Vec<String>
}

#[derive(serde::Serialize)]
pub struct Game{
    pub name : String,
    pub image_url: String
}

#[derive(serde::Serialize)]
#[derive(Debug)]
pub struct User{
    pub userhash : String,
}