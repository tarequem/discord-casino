import { Client, Message, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';

const client = new Client({ intents: [GatewayIntentBits.Guilds] }); 

client.once('ready', () => {
    console.log('Bot is online!')
});

client.on('message', async (message: Message) => {
    if (message.author.bot) return;

    //test simple flip coin game command
    if (message.content === '!coinflip') {
        const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
        message.channel.send(`The coin landed on: ${result}`);
    }
    
    //casino games
});

dotenv.config();

// Ensure you're reading your bot token from an environment variable or some secure source
client.login(process.env.DISCORD_BOT_TOKEN);
