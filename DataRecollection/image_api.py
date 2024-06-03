import os
from PIL import Image
from io import BytesIO
from bing_image_downloader import downloader
import pandas as pd


def download_google_image_cover(GameName, width, height) -> str:
    GameName = GameName.replace(" ", "-").replace(":", "")
    query_string = f"{GameName}-Cover"
    image_path = f'dataset/{query_string}/Image_1.jpg'
    downloader.download(query_string, limit=1, output_dir='dataset',
                        adult_filter_off=True, force_replace=False, timeout=60)   
    
    # Search for the image in the dataset folder
    for root, dirs, files in os.walk(f'dataset/{query_string}'):
        for file in files:
            if file.endswith('.jpg'):
                image_path = os.path.join(root, file)
                break
            if file.endswith('.jpeg'):
                image_path = os.path.join(root, file)
                break
            if file.endswith('.png'):
                image_path = os.path.join(root, file)
                break
    return image_path


def dowload_all_images():
    df = pd.read_csv('../Games.csv')
    dfs = pd.DataFrame({
        'Games': df['Games'],
        'Images Path': None
    })
    for index, row in dfs.iterrows():
        print(f"Downloading image for {row['Games']}")
        image_path = download_google_image_cover(row['Games'], 800, 600)
        print(f"Image downloaded for {row['Games']}")
        dfs.at[index, 'Images Path'] = image_path
    dfs.to_csv('Games_Images.csv', index=False)



if __name__ == '__main__':
    dowload_all_images()