const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let msg = await message.channel.send("Generating avatar...");
      let target = message.mentions.users.first() || message.author;


      const embedNOTIF1 = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
      .setTimestamp()
      .setImage(target.displayAvatarURL)
      .setColor("0xFF0000")



      await message.channel.send(embedNOTIF1);
      msg.delete();
}


module.exports.help = {
    name: "avatar"
}