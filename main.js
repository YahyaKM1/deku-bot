const Discord = require('discord.js');

const client = new Discord.Client();

const randompuppy = require("random-puppy");

const ytdl = require('ytdl-core');

const prefix = '-';

const fetch = require('node-fetch');

client.once('ready', () => {
    console.log('jiro bot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'test'){
        message.channel.send('im ready');
    }   
    });

client.login('process.env.BOT_TOKEN');
