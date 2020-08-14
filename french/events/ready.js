const Discord = require("discord.js");

module.exports = async (bot) => {

    bot.user.setActivity(`Les messages privés.`, { type: "WATCHING" })
    console.log(`${bot.user.username} est prêt !`);

} 
