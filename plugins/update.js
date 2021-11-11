let { execSync } = require('child_process')

let handler = async (m, { conn, text, isROwner }) => {

if (global.conn.user.jid == conn.user.jid) {



await conn.fakeReply(m.chat, 'Update script (private)', '0@s.whatsapp.net', 'Fast Update Github', 'status@broadcast')



let stdout = execSync('git pull https://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@github.com/supuna28/botkingdom.git' + (isROwner && text ? ' ' + text : ''))



if (isROwner) require('fs').readdirSync('plugins').map(v => global.reload('', v))



m.reply(stdout.toString())



}



}



handler.help = ['update']

handler.tags = ['host']

handler.command = /^update$/i

handler.owner = true

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.register = true

handler.admin = false

handler.botAdmin = false

handler.fail = null

handler.exp = 0

module.exports = handler
