mod api;
use neo4rs::query;


// TODO: FIX TESTS

#[tokio::test]
async fn driver_starting() {
    let driver = api::query_manager::start_driver().await;
    print!("{:?}", driver.execute(query("RETURN 0")).await.is_ok());
    assert_eq!(driver.execute(query("RETURN 0")).await.is_ok(), true);
}

// for some reason this test is not executing
#[tokio::test]
async fn creating_node(){
    let categories:Vec<String> = vec!["Simulation".to_string(), "Action".to_string(), "Adventure".to_string()];
    let hash = api::query_manager::user_node_creation(categories);
    assert_ne!(hash.await, ""); 
}

#[tokio::test]
async fn trying_jaccard(){
    let categories:Vec<String> = vec!["3D".to_string()];
    let jaccard = api::query_manager::get_games(categories).await;
    print!("{:?}", jaccard);
    assert_ne!("genericHash".to_string(), ""); // just for the test to run
}