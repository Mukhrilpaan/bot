let handler  = async (m, { conn }) => {
  if (!m.fromMe) m.reply('waalaikumusalam', null, { contextInfo: { forwardingScore: 508, isForwarded: true }})
  conn.chatRead(m.chat)
  
}
handler.customPrefix = /asalam|assalam|aslm|asalm|aslam/i
handler.command = new RegExp
module.exports = handler
