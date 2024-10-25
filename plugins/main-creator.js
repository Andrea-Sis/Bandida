let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Sisked 👤;;\nFN:Sisked 👤\nORG:Bandida\nTITLE:\nitem1.TEL;waid=584123989549:56981913990\nitem1.X-ABLabel:Sisked ⭐\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Bandida\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
