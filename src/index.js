const config = require('./config/config.json');
const eris = require('eris');


const token = config.token;

// Create a Client instance with our bot token.

const bot = new eris.Client(token);



// When the bot is connected and ready, log to console.
bot.on('ready', () => {
   console.log('Connected and ready.');
});

// Every time a message is sent anywhere the bot is present,
// this event will fire and we will check if the bot was mentioned.
// If it was, the bot will attempt to respond with "Present".
bot.on('messageCreate', async (msg) => {
   const botWasMentioned = msg.mentions.find(
       mentionedUser => mentionedUser.id === bot.user.id
   );

   if (botWasMentioned) {
       try {
           await msg.channel.createMessage('PesterBot here! Who do you need to bug?');
       } catch (err) {
           // There are various reasons why sending a message may fail.
           // The API might time out or choke and return a 5xx status,
           // or the bot may not have permission to send the
           // message (403 status).
           console.warn('Failed to respond to mention.');
           console.warn(err);
       }
   }
});

bot.on('error', err => {
   console.warn(err);
});

bot.connect();