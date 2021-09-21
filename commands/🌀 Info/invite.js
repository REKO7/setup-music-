const { Client, Message, MessageEmbed } = require('discord.js');
const config = require('../../config.json')

module.exports = {
    name: 'invite',
    aliases: ['inv'],
    description: 'get my invite link',
    useage: 'invite',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        let invite = new MessageEmbed()
            .setColor(config.colors.yes)
            .setTitle(client.user.username)
            .setThumbnail(client.user.displayAvatarURL())
            .setAuthor(message.author.username)
            .setDescription(`\`Click Below On Invite Link\``)
            .addField("**Onwer Bot ✨**", `
                >>> <@747528109884178532> \`!   𝗙𝗞・𝗠𝗿.𝗥𝗲𝗞𝗼#1111 \` [\`Music Bot Support\`](https://discord.com/api/oauth2/authorize?client_id=769330211157835784&permissions=8&scope=bot)
                `)
            .setFooter("Music Bot✨")

        message.channel.send(invite)
    }
}
