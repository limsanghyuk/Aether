import requests
import json
import os

# Configuration
CLOUD_RUN_URL = "https://[YOUR_CLOUD_RUN_URL]/api/export-chroma" # To be replaced with actual express route
LOCAL_SAVE_PATH = "C:/Aether_DB/ChromaDB"

def sync_database():
    print("Initiating Aether ChromaDB Synchronization...")
    try:
        response = requests.get(CLOUD_RUN_URL)
        if response.status_code == 200:
            data = response.json()
            
            # Ensure local directory exists
            os.makedirs(LOCAL_SAVE_PATH, exist_ok=True)
            
            # Save Raw JSON Data
            with open(os.path.join(LOCAL_SAVE_PATH, 'sequence_data.json'), 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
                
            print(f"Successfully migrated {len(data['records'])} sequence records to local storage.")
            print(f"Path: {LOCAL_SAVE_PATH}")
        else:
            print(f"Failed to fetch data: {response.status_code}")
    except Exception as e:
        print(f"Connection Error: {str(e)}")

if __name__ == "__main__":
    sync_database()
