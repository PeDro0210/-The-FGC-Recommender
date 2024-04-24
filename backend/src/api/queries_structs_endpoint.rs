#[derive(serde::Serialize)]
struct Character{
    name : String,
    image_url: String
}

#[derive(serde::Serialize)]
struct Questions{
    list_of_quetions : Vec<String>
}

#[derive(serde::Serialize)]
struct Game{
    name : String,
    image_url: String
}