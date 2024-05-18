use std::hash::{self, Hasher, Hash};
use std::time::{SystemTime, UNIX_EPOCH};

pub fn hasher_function(categories: Vec<String>) -> String {
    let mut hasher = hash::DefaultHasher::new(); // Create a new hasher
    // Hash the categories concatenated
    let current_time = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs();
    for category in categories {
        category.hash(&mut hasher);
    }
    current_time.hash(&mut hasher);
    let hash_value = hasher.finish();
    return hash_value.to_string();
}