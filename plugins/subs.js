let fetch = require('node-fetch')

let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `

┌〔 SUBSCRIBE MY CHANNEL〕

├ https://youtube.com/channel/UCn2Oqh6Y2MwUQGaEn_KPl6Q

└────

`.trim(), '© stikerin', '❤️', '.donasi', m)

handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^sub(cribe|s)$/i

module.exports = handler
