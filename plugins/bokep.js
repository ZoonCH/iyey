let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'βΏππ₯πππ§π’π₯β’πππππͺπ―\nSubscribe : https://youtube.com/channel/UCjzlh0Uhz8KJYZnZ0BVN35w', m)
}
handler.help = ['bkp']
handler.tags = ['asupan']

handler.command = /^(bkp)$/i
handler.premium = true
handler.register = true
handler.limit = 4
module.exports = handler


