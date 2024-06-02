import discord
from discord.ext import commands
import pandas as pd
from image_api import download_google_image_cover

class creating_channel(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
    async def CreatingChannels(self, ctx, df):
        # Iterate over the rows in the dataframe
        for index, row in df.iterrows():
            try:
                try:
                    dfs = pd.read_csv('Games_Images.csv')
                    channel_name = row['Games'].strip().replace(" ", "-").lower().replace(":", "")
                    category = discord.utils.get(ctx.guild.categories, name=channel_name)
                except Exception as e:
                    print(e)
                    await ctx.send("An error occurred while creating the channels.")
                    pass

                print(f"Creating channel {index + 1}/{len(df)}")
                # Check if the channel already exists in the category
                category = await ctx.guild.create_category(channel_name)

                # Create the channel if it doesn't exist
                new_channel = await category.create_text_channel("Portada")
                await ctx.send(f"Channel '{channel_name}' created in category '{category.name}'.")

                # Send the first message with the image link
                game_name = row['Games']
                first_message = f"Portada: {game_name}"

                await new_channel.send(first_message)
                
                # Download the image and send it
                image_path = dfs.loc[dfs['Games'] == game_name, 'Images Path'].iloc[0]
                
                if image_path:
                    with open(image_path, 'rb') as img_file:
                        await new_channel.send(file=discord.File(img_file, filename=f'{game_name}.png'))
                        print(f"Image uploaded for {game_name}")
                        image_link = new_channel.last_message.attachments[0].url
                        row["Image Link"] = image_link
                else:
                    await ctx.send(f"Channel '{channel_name}' already exists in category '{category.name}'.")
                print(f"Channel {index + 1}/{len(df)} created")
                df.to_csv('../NewGames.csv', index=False)
            except Exception as e:
                print(e)
                await ctx.send(f"An error occurred while creating the channel for {row['Games']}.")
                pass

    @commands.command(name="CreateChannels", aliases=["CC"], help="Creates the channels")
    async def CreateChannels(self, ctx):
        df = pd.read_csv('../Games.csv')
        try:
                await self.CreatingChannels(ctx, df)
        except discord.errors.HTTPException as e:
            if e.code == 50035:
                await self.CreatingChannels(ctx)
                await ctx.send("Maximum number of channels in category reached. Creating another category...")
            else:
                print(e)
                await ctx.send("An error occurred while creating the channels.")
        except Exception as e:
            print(e)
            await ctx.send("An error occurred while creating the channels.")
    @commands.command(name="SearchLinks", aliases=["C"], help="Creates the channels")
    async def update_images(self, ctx):
        # Cargar el DataFrame
        try:
            df = pd.read_csv("../Games.csv")  # Asegúrate de que el archivo está correctamente ubicado
            df["Games"] = df["Games"].str.strip().str.replace(" ", "-").str.lower().str.replace(":", "")
            linksList = []
            # Recorrer las categorías del servidor
            for category in ctx.guild.categories:
                try:
                    if category.name == "Logistica":
                        continue
                    if category.name == "DB":
                        continue
                    print(f"Searching in category {category.name}")
                    for channel in category.text_channels:
                        print(f"Searching in channel {channel.name}")
                        # Buscar el nombre del juego en el DataFrame
                        messages = [message async for message in channel.history(limit=2, oldest_first=True)]

                        game_name = channel.name
                        game_row = df[df["Games"] == game_name]
                        game_row["ImageLink"] = messages[1].attachments[0].url
                        linksList.append(messages[1].attachments[0].url)
                        # Actualizar el enlace de la imagen
                        df.loc[df["Games"] == game_name, "ImageLink"] = game_row["ImageLink"]
                except Exception as e:
                    print(e)
                    await ctx.send(f"An error occurred while updating the image link for channel {channel.name}.")
                    pass
            # Iterate in the dataframe, and for each row, put the image link in the corresponding row
            print(linksList)
            # Save the links in a csv file
            with open("Links.csv", "w") as file:
                for link in linksList:
                    file.write(f"{link}\n")
            df.to_csv("../NewGames.csv", index=False)
            await ctx.send("Todos los enlaces de imágenes han sido actualizados.")
        except Exception as e:
            print(e)
            await ctx.send("An error occurred while updating the image links.")

