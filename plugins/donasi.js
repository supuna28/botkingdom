let fetch = require('node-fetch')

let fs = require('fs')

let handler = async (m, { conn }) => {

let img = fs.readFileSync('src/donasi.jpg')

conn.sendLoc(m.chat, img, `*[+] BOT KINGDOM [+]*

https://chat.whatsapp.com/CIDWlH7yzEsKombRDcTKcV

}

handler.help = ['script']

handler.tags = ['main']

handler.command = /^(sc|script)$/i

module.exports = handler
