const { Client, Message, MessageEmbed } = require('discord.js');
const config = require('../../config.json')

module.exports = {
    name: 'invite',
    aliases: ['inv'],
    description: 'get my invite link',
    useage: 'invite',
    run: async (client, message, args) => {
        let invite = new MessageEmbed()
            .setColor(config.colors.yes)
            .setDescription(`Invite Link`)
            .addField("Music Bot", `
                 [Invite Music Bot✨](https://discord.com/api/oauth2/authorize?client_id=769330211157835784&permissions=8&scope=bot)
                `)

        message.channel.send(invite)
    }
}

