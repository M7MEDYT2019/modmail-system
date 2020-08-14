const Discord = require("discord.js");
const functions = require("../../functions/functions");

exports.run = async (bot, message, args) => {

    if(message.channel.type !== "dm" && !message.author.bot && !message.channel.name.startsWith(`mp-`) && !isNaN(message.channel.topic)) return functions.error(message.channel, "Cette commande peut-être éxecutées seulement dans un salon d'aide.");

    guildSupport = bot.guilds.cache.find(c => c.id === bot.config.serverID);
    if(!guildSupport) return console.log(`Aucun serveur valide n'a été définit comme serveur support.`);

    let ticketSupport = guildSupport.roles.cache.find(r => r.name === "ModMail Support");
    if(!ticketSupport) {
        guildSupport.roles.create({data:{name: "ModMail Support", permissions: 0}, reason: 'Le staff a besoin de ce rôle pour voir les tickets.'});
        functions.error(message.channel, "Le rôle de support vient tout juste d'être créé, veuillez refaire cette commande.");
        return;
    }

    if(!message.guild.member(message.author).roles.cache.has(ticketSupport.id)) return functions.error(message.channel, `Le rôle ${ticketSupport} est nécessaire pour cette commande.`);

    let user = bot.users.cache.find(u => u.id === message.channel.topic);
    if(!user) return functions.error(message.channel, "Impossible de trouver cet utilisateur.");

    let closeEmbed = new Discord.MessageEmbed()
    .setAuthor(`🗑️ | Ticket Terminé`)
    .setColor(bot.color.blue)
    .setTimestamp()
    .setFooter(`Renvoyez un message pour réouvrir un ticket.`)
    .setDescription(`Votre ticket a été fermé par un membre de notre équipe. Si vous pensez qu'il a fait une erreur, n'hésitez pas à le réouvrir en envoyant un message dans ce salon de message privé.`)
    .addField(`Comment supprimer tout les messages ?`, [
        `Vous pouvez supprimer tout les messages du bot en envoyant : \`clear please\`.`
    ]);

    user.send(closeEmbed)
    .then(m => {
        message.channel.delete().catch(e => {return functions.error(message.channel, "Impossible de supprimer ce salon.")});
    });
    
}

exports.help = {
    name: "close",
    aliases: ['fermer'],
    category: "Utilities"
}

exports.requirements = {
    botOwner: false,
    botPerms: ['MANAGE_CHANNELS', 'MANAGE_ROLES'],
    userPerms: []
}