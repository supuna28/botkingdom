let fetch = require('node-fetch')

let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'BOT KINGDOM')).buffer(), `

🎈 *THE BOT KINGDOM BOT* 🎈

     

📌🥇For Our Bot Users

📌🥈If you also want to get these bots, please contact this bot owner

🚫So do not ask for this bot GitHub link saying that you want to build this bot

🚫If you want to get this, you can get the QR code of this bot from the bot owner. So do not bother asking for the link.

📌 Thank you all for using our premium bot service

🔖Bot Owner|:ঔৣ͜͡ꪶ͢𝑹̶⃛𝚫̷⃮⃕⃔͢𝑴̶𝑰̷⃛͢𝒀̷𝚫̶⃛͢ꫂ ·࣭࣪̇˖

🔖Sever By   |:ঔৣ͜͡ꪶ͢𝑺̶𝑼̷⃛͢𝑷̶⃮𝑼̶͢𝑵̷𝚫̶͢ꫂ ·࣭࣪̇˖


`.trim(), '© BOTKINGDOM', 'OK', '.donasi', m)

handler.help = ['script']

handler.tags = ['info']

handler.command = /^script$/i

module.exports = handler
