const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

bot.on("ready", async () => {
    console.log(`${bot.user.username} is ready for action!`);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

    if(cmd == `${prefix}HelloWorld`){
        message.channel.send("Annyeon World!");
    }
});

bot.login(config.token);