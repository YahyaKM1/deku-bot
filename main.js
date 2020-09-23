const Discord = require('discord.js');

const client = new Discord.Client();

const embed = new Discord.MessageEmbed()

const got = require('got')

const prefix = '-';

function doMagic8BallVoodoo() {
    var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];

    return rand[Math.floor(Math.random()*rand.length)];
}


client.once('ready', () => {
    console.log('Deku bot is online!');
    client.user.setActivity('✰ closed Beta', { type: 'PLAYING' }).catch(console.error);

});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'meme'){
        got('https://www.reddit.com/r/me_irl/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(`${memeImage}`)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes}  👎 ${memeDownvotes}  💬 ${memeNumComments}`)
            message.channel.send(embed)
        })
        if(command === 'memec'){
            got('https://www.reddit.com/r/cleanmemes/random/.json').then(response => {
                let content = JSON.parse(response.body);
                let permalink = content[0].data.children[0].data.permalink;
                let memeUrl = `https://reddit.com${permalink}`;
                let memeImage = content[0].data.children[0].data.url;
                let memeTitle = content[0].data.children[0].data.title;
                let memeUpvotes = content[0].data.children[0].data.ups;
                let memeDownvotes = content[0].data.children[0].data.downs;
                let memeNumComments = content[0].data.children[0].data.num_comments;
                embed.setTitle(`${memeTitle}`)
                embed.setURL(`${memeUrl}`)
                embed.setImage(`${memeImage}`)
                embed.setColor('RANDOM')
                embed.setFooter(`👍 ${memeUpvotes}  👎 ${memeDownvotes}  💬 ${memeNumComments}`)
                message.channel.send(embed)
            })
        }
    }
    if(command === 'gj'){
        message.channel.send('subarashi for leveling up!!');
    }
    if(command === 'gn'){
        message.channel.send('GOOD night everyone!');
    }
    if(command === 'simog'){
        message.channel.send(Embed);
    }
    if (command === 'welcome') {
        // grab the "first" mentioned user from the message
        // this will return a `User` object, just like `message.author`
        const taggedUser = message.mentions.users.first();
    
        message.channel.send(`Welcome ${taggedUser.username} to OTAKUGAMERS!`);
        if (!message.mentions.users.size) {
            return message.reply('u dummy u need to tag someone before welcoming them!');
        }
        if (command === 'w-tben') {
            // grab the "first" mentioned user from the message
            // this will return a `User` object, just like `message.author`
            const taggedUser = message.mentions.users.first();
        
            message.channel.send(`Welcome ${taggedUser.username} to tben academia!`);
            if (!message.mentions.users.size) {
                return message.reply('u dummy u need to tag someone before welcoming them!');
            }
       
        
    }
}
    
});


client.login(process.env.token);

var modBot = require('discord-moderator-bot')

modBot('NzQ1MDgwMzc4OTYzNzg3Nzk2.XzskLQ.NR_DPQ9W9dgvVhDJ9eBgWbavW-c','-')
