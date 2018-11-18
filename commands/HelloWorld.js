const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    console.log("HelloWorld Init")
    message.channel.send("Annyeon World!");
}

module.exports.help = {
    name: "HelloWorld".toLowerCase()
}