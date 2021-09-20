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

.setTitle("**Welcome to My Help Menu**") 

.addField("ℹ️ Information","`stats`, `invite`, `ping`") 

.addField("🎵 Music","`play`, `playskip`, `addrelated`, `autoplay`, `playlist`, `pause`, `resume`, `volume`, `stop`, `skip`, `seek`, `shuffle`, `loop`, `queue`, `clearqueue`, `jump`, `nowplaying`, `radio`, `removetrack`, `rewind`, `search`, `searchrelated`, `forward`, `grab`, `status`") 

.addField("🥁 Filter","`8d`, `bassboost`, `earrape`, `echo`, `flanger`, `gate`, `hass`, `heavybass`, `karaoke`, `lightbass`, `mcompand`, `nightcore`, `phaser`, `pulsator`, `purebass`, `reverse`, `subboost`, `surrounding`, `treble`, `tremolo`, `vaporwave`, `vibrato`, `clear`") 

.addField("🛡️ Setup","`setup`, `reset`") 

.setDescription( 

`Remix Bot✨ is one of the best bot to listen to songs to play song type: \`${prefix}play\`.` 

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

