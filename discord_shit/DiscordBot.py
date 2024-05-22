import discord
from discord.ext import commands
import asyncio
from dotenv import load_dotenv
import os
import cog_channel as cog

intents = discord.Intents.default()
intents.message_content = True

load_dotenv()
Token = os.getenv("DISCORD_TOKEN")

bot = commands.Bot(
    command_prefix=commands.when_mentioned_or("!"),
    intents=intents,
)

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user.name} - {bot.user.id}')
    print('------')

async def run_ken():
    async with bot:
        await bot.add_cog(cog.creating_channel(bot))
        await bot.start(Token)
         
asyncio.run(run_ken())