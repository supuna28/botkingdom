let { execSync } = require('child_process')

let handler = async (m, { conn, text, isROwner }) => {

if (global.conn.user.jid == conn.user.jid) {

await conn.fakeReply(m.chat, 'BOT KINGDOM', '0@s.whatsapp.net', 'BOT KINGDOM', 'status@broadcast')

}

}

handler.help = ['donasi']

handler.tags = ['host']

handler.command = /^donasi$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.register = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

handler.exp = 0

module.exports = handler
