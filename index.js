const Discord = require('discord.js');
const {Client}= require('discord.js');
global.fetch = require("node-fetch");
const bot = new Client();
var randomnumber =Math.floor(Math.random()*10)

const PREFIX ="!";


bot.on('ready',()=>console.log('Bot is online'))
bot.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});

bot.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'Love me') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play('./Love mesage.m4a'); 
    } else {
      message.reply('You need to join a voice channel first!');
    }   
  }
});
bot.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'Help me') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play('./Get well soon.m4a'); 
    } else {
      message.reply('You need to join a voice channel first!');
    }   
  }
});
bot.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'need water') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play('./Drink.m4a'); 
    } else {
      message.reply('You need to join a voice channel first!');
    }   
  }
});

bot.on('message',async message=>{
 let args = message.content.substring(PREFIX.length).split(" ");
 switch(args[0]){
    case 'quote':
        fetch("https://type.fit/api/quotes")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          message.reply(data[(Math.floor(Math.random() * 100) + 1)].text);
        });
        break;
      case 'lover':
        const attachment2= new Discord.MessageAttachment(`./${(Math.floor(Math.random() * 14) + 1)}.jpg`)
        message.channel.send(message.author,attachment2)
        break;
      case 'vanish':
        if (!args[1]) return message.reply('Error , Plese specify number of messages')
        message.channel.bulkDelete(args[1])
        break;
      case 'loveme':
        if(!Discord.VoiceChannel.id){
          message.reply("Connect to Voice channel")
        }
        Discord.VoiceChannel.join()
      }
      

})
bot.login(process.env.token);

