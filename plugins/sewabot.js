let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/539c545d35277c4f9a154.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let arietube = '6285794829914@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/539c545d35277c4f9a154.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/539c545d35277c4f9a154.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• 𝘀𝗲𝘄𝗮 𝗯𝗼𝘁 𝗶𝗻𝗶 & 𝘂𝗻𝗱𝗮𝗻𝗴 𝗸𝗲 𝗴𝗿𝘂𝗽 & 𝘂𝗽𝗴𝗿𝗮𝗱𝗲 𝗷𝗮𝗱𝗶 𝗺𝗲𝗺𝗯𝗲𝗿 𝗽𝗿𝗲𝗺𝗶𝘂𝗺 •*

𝚄𝚗𝚝𝚞𝚔 𝚌𝚊𝚛𝚊 𝚒𝚗𝚟𝚒𝚝𝚎 𝚋𝚘𝚝 𝚒𝚗𝚒 𝚌𝚊𝚛𝚊 𝚗𝚢𝚊 𝚖𝚞𝚍𝚊𝚑

𝘾𝙪𝙠𝙪𝙥 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝘾𝙝:
https://youtube.com/channel/UCjzlh0Uhz8KJYZnZ0BVN35w
Lalu chat nomor:
http://wa.me/6283822910734?text=SAYA+SUDAH+SUBSCRIBE

☞𝑜𝑤𝑛𝑒𝑟 ❀wa.me/${owner[0]}✵

*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'5034669133312159'}]}],
  headerImage: { productId: '5034669133312159',
  jpegThumbnail: baper },
  businessOwnerJid: `6285794829914@s.whatsapp.net`
  },
  footerText: '',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
