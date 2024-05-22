from ast import alias
import discord
from discord.ext import commands
import asyncio
import pandas as pd
import concurrent.futures

class creating_channel(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="CreateChannels", aliases=["CC"], help="Creates the channels")
    async def CreateChannels(self,ctx):
                # Load the CSV data
        df = pd.read_csv('../Games.csv')

        # Ensure the category exists
        category = discord.utils.get(ctx.guild.categories, name="DB")
        if not category:
            category = await ctx.guild.create_category("DB")

        # Iterate over the rows in the dataframe
        for index, row in df.iterrows():
            print(f"Creating channel {index + 1}/{len(df)}")
            channel_name = row['Games'].strip()

            # Check if the channel already exists in the category
            existing_channel = discord.utils.get(category.channels, name=channel_name)
            if not existing_channel:
                # Create the channel if it doesn't exist
                new_channel = await category.create_text_channel(channel_name)
                await ctx.send(f"Channel '{channel_name}' created in category '{category.name}'.")

                # Send the first message with the image link
                game_name = row['Games']
                image_link = row['ImageLink']
                if pd.notna(image_link):  # Check if the image link is not NaN
                    first_message = f"Portada: {game_name}\n{image_link}"
                else:
                    first_message = f"Portada: {game_name}"

                await new_channel.send(first_message)
            else:
                await ctx.send(f"Channel '{channel_name}' already exists in category '{category.name}'.")
        