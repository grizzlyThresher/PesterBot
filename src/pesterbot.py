import discord

token = sys.argv[1]

client = discord.Client()


@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('--pester'):
        await message.channel.send('Hello @' + message.author.name + message.author.discriminator + '! I am PesterBot! To get someone\'s attention, just type --pester @(user_to_be_pestered)')

client.run(token)