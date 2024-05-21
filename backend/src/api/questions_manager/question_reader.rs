use serde_json::Value;
use std::fs::File;
use std::io::Read;
use std::path::Path;

pub fn read_schema(file_path: &str) -> Result<Value, String> {
    let path = Path::new(file_path);
    let mut file = File::open(&path).map_err(|e| format!("Failed to open file: {}", e))?;
    let mut data = String::new();
    file.read_to_string(&mut data).map_err(|e| format!("Failed to read file: {}", e))?;
    serde_json::from_str(&data).map_err(|e| format!("Failed to parse JSON: {}", e))
}