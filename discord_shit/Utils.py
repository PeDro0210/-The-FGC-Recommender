import pandas as pd

df = pd.read_csv('../Games.csv')

df_links = pd.read_csv('Links.csv')
df['ImageLink'] = df_links['Links']

df.to_csv('../NewGames.csv', index=False)
