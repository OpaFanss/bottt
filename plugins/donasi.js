let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [08815109103]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [08815109103]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
