const { stripIndents } = require("common-tags"); 

const config = require("../../config.json") 

const { readdirSync } = require("fs"); 

const prefix = require("../../config.json").prefix; 

const { MessageEmbed } = require("discord.js") 

 

module.exports = { 

name: 'help', 

aliases: ['h'], 

description: 'get get list of commands', 

useage: 'help', 

run: async (client, message, args) => { 

if (!args[1]) { 

 

 

const embed = new MessageEmbed() 

.setTitle("**Music Bot✨ **") 

.addField(" | Setup ","`setup` - `reset`")

.addField(" | Information ","`*help` - `invite` - `ping`") 

.addField(" | Music ","`play` - `playskip` - `autoplay` - `playlist` - `pause`  `resume` - `volume` - `stop` - `skip` - `seek` - `shuffle`  `loop` - `queue` - `clearqueue` - `jump` - `nowplaying`  `radio` - `search` - `grab` `status`") 
 
.setDescription( 

`prefix 》*help` 

) 

.setColor("RANDOM") 

return message.channel.send(embed); 

} else { 

const command = 

client.commands.get(args[0].toLowerCase()) || 

client.commands.find( 

(c) => c.aliases && c.aliases.includes(args[0].toLowerCase()) 

); 

 

if (!command) { 

const embed = new MessageEmbed() 

.setTitle(`Invalid command! Use \`${prefix}help\` for all of my commands!`) 

.setColor("RANDOM") 

return message.channel.send(embed); 

} 

 

const embed = new MessageEmbed() 

.setTitle("Command Details:") 

.addField("PREFIX:", `\`${prefix}\``) 

.addField( 

"COMMAND:", 

command.name ? `\`${command.name}\`` : "No name for this command." 

) 

.addField( 

"ALIASES:", 

command.aliases 

? `\`${command.aliases.join("` `")}\`` 

: "No aliases for this command." 

) 

.addField( 

"USAGE:", 

command.usage 

? `\`${prefix}${command.name} ${command.usage}\`` 

: `\`${prefix}${command.name}\`` 

) 

.addField( 

"DESCRIPTION:", 

command.description 

? command.description 

: "No description for this command." 

) 

.setFooter( 

`Requested by ${message.author.tag}`, 

message.author.displayAvatarURL({ dynamic: true }) 

) 

.setTimestamp() 

.setColor("RANDOM") 

return message.channel.send(embed); 

} 

}}

