let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/japan'), 'βΏππ₯πππ§π’π₯β’πππππͺπ―\nSubscribe : https://youtube.com/channel/UCjzlh0Uhz8KJYZnZ0BVN35w', wm, 'NEXT', '.cevanjapan', m)
}

handler.help = ['cecanjapan']
handler.tags = ['asupan']
handler.command = /^(cecanjapan)$/i
handler.limit = 3

module.exports = handler