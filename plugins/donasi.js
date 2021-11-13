let fetch = require('node-fetch')

let fs = require('fs')

let handler = async (m, { conn }) => {

let img = fs.readFileSync('src/donasi.jpg')
conn.sendLoc ( m . chat ,  img ,  `*[+] SOURCE CODE [+]*
Link GROUP:

https://chat.whatsapp.com/CIDWlH7yzEsKombRDcTKcV`, global.footer, 'BACK MENU', '#menu', m)

}

handler.help = ['group']

handler.tags = ['main']

handler.command = /^(donasi|group)$/i

module.exports = handler
