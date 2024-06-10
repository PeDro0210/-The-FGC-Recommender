mod api;
use neo4rs::query;




#[tokio::test]
async fn driver_starting() {
    let driver = api::query_manager::start_driver().await;
    print!("{:?}", driver.execute(query("RETURN 0")).await.is_ok());
    assert_eq!(driver.execute(query("RETURN 0")).await.is_ok(), true);
}

// ** Commented cause the public functions are set to private
// for some reason this test is not executing
// #[tokio::test]
// async fn creating_node(){
//     let categories:Vec<String> = vec!["3D".to_string()];
//     let hash = api::query_manager::user_node_creation(categories);
//     assert_ne!(hash.await, ""); 
// }

#[tokio::test]
async fn trying_jaccard(){
    let categories:Vec<String> = vec!["Anime".to_string(),"3D".to_string()];
    let archetypes:Vec<String> = vec!["Mishima".to_string()];
    let jaccard = api::query_manager::get_games(categories,archetypes).await;
    print!("{:#?}", jaccard);
    assert!(!jaccard.is_empty()); // check if jaccard returns something
}

#[test]
fn trying_get_questions(){
    let file_path = "src/api/questions_manager/Questions.json";
    let questions = api::questions_manager::question_reader::read_schema(&file_path);
    print!("{:#?}", questions);
    assert!(questions.is_ok()); // check if questions returns something
}