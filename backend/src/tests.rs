use tokio::test;
mod api;
use crate::api::query_manager::*;
use neo4rs::{query};


#[tokio::test]
async fn driver_starting() {
    let driver = api::query_manager::start_driver().await;
    assert_eq!(driver.execute(query("RETURN 1")).await.is_ok(), true);
}

#[tokio::test]
async fn creating_node(){
    let categories:Vec<String> = vec!["Simulation".to_string(), "Action".to_string(), "Adventure".to_string()];
    let node = api::query_manager::user_node_creation(categories).await;   
    print!("{:?}",node); 
}