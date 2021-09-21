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

.setTitle("**__Help__ **") 
    .setFooter(message.author.username)
  .setImage("https://cdn.discordapp.com/attachments/808760849867079721/838228786742820904/standard_1.gif") 
  .setDescription(` Prefix: *help\n\n**[  SUPPORT  ](https://discord.gg/b3dmQYX5PH)**  **[   INVITE  ](https://discord.com/api/oauth2/authorize?client_id=769330211157835784&permissions=8&scope=bot)**  **[  VOTE  ](https://top.gg/bot/769330211157835784/vote)**`)


.addField("<a:SIA_DiscordStaff:803965271554392114> | Setup ","`setup` - `reset`")

.addField("<a:emoji_1:849776457122185277> | Other ","`*help` - `invite` - `ping`") 

.addField("<a:emoji_1:849776441126158337> | Music ","\`play\` - `playskip` - `autoplay` - `playlist` - `pause`  `resume` - `volume` - `stop` - `skip` - `seek` - `shuffle`  `loop` - `queue` - `clearqueue` - `jump` - `nowplaying`  `radio` - `search` - `grab` - `status`") 
 






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

