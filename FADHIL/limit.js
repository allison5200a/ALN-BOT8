const limitend = (pushname2) => {
        return`*Desculpe ${pushname2}o limite de hoje expirou*\n*o limite é redefinido a cada 12:00 WIB MIDDLE NIGHT*`
}

const limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
o resto do seu limite : ${limitCounts}

NOTE : Se terminar, você pode usá-lo novamente amanhã`
}
exports.limitend = limitend
exports.limitcount = limitcount
