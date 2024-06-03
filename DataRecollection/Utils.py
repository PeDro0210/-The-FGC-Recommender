import pandas as pd
import pandas as pd

df = pd.read_csv('../Data/Tekken 7.csv')

df = pd.read_csv('../Data/Tekken 7.csv')
df = df[['CharacterName']]  # Keep only the "CharacterName" column

df.to_csv('../Data/Tekken 7.csv', index=False)  # Save the DataFrame to a CSV file
