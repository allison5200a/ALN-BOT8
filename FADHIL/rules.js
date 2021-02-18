const rules = (name, uptime, tanggal, jam, prefix) => {
return `

 CULTURA LENDO PARA NÃO FICAR CONFUSO.
╭───────────────────────
├➲ \`\`\`ATIVO\`\`\`: *${kyun(uptime)}*
├➲ \`\`\`HORA\`\`\`: *${jam} WIB*
├➲ \`\`\`ENCONTRO\`\`\`: *${tanggal}*
├➲ \`\`\`VERSION\`\`\`: 8.0 TERMUX*
╰───────────────────────
 *「RULES ${name}」*
 
➲ ⚠️SPAM.⚠️      = *BANNED + BLOCK*
➲ ⚠️*CALL / VC⚠️ = *BANNED + BLOCK*

 *「BUGS ${name}」*

➲ *1.CHATLIST*
➲ *2.CNEON*
➲ *3.CNEON2*
➲ *4.TRIGGER*
➲ *5.WASTED*
➲ *6.C3D*
➲ *7.SIMI*
➲ *8.GETSES*

 *「 NOTE ${name} 」*
 
➲ Este bot é um programa de código aberto (gratuito) escrito em Javascript, você pode usar, copiar, modificar, combinar, publicar, distribuir, sublicenciar e / ou vender cópias sem remover o autor principal deste bot.

➲Ao usar este bot, você concorda com os seguintes Termos e Condições:
 - O bot não armazena seus dados em nossos servidores.
 - O bot não é responsável pelos adesivos que você faz a partir deste bot e pelos vídeos, imagens ou outros dados que você obtém deste bot.
 - Os bots não podem ser usados ​​para serviços que visam / contribuem para: 
     • sexo / tráfico humano
     • jogatina
     • comportamento viciante prejudicial
     • crime
     • violência (a menos que necessário para proteger a segurança pública)
     • queima / desmatamento florestal
     • discurso de ódio ou discriminação com base na idade, sexo, identidade de gênero, raça, sexualidade, religião, nacionalidade

➲ Baileys Typescript/Javascript WhatsApp Web API: ......

➲  *KASIH BOT JEDA 5 DETIK BIAR GA ERROR!!!!*

➲ \`\`\`Este bot não está completamente terminado\`\`\`
    \`\`\`Ainda em progresso\`\`\`
     \`\`\`Portanto, ainda raramente está ativo, e\`\`\`
 .    .\`\`\`Desculpe, se houver um menu de erro\`\`\`
 
➲ \`\`\`Se for antigo, por favor, repita o comando\`\`\`

➲ *Use o comando sem [ ]*

➲ \`\`\`E se você tiver um erro\`\`\`
    \`\`\`Informe o proprietário por via\`\`\`
➲  *${prefix}report* \`\`\`qual é a mensagem de erro\`\`\`

➲ \`\`\`Quer Invit Bot ?? Doe Gan,\`\`\`
    \`\`\`Se você doar, siga Ig\`\`\`
     \`\`\`@bryan_rafly09\`\`\`

➲  \`\`\`Você pode publicar suas citações\`\`\`
 \`\`\`Se os interesses contatarem o proprietário da Aja,\`\`\`
  \`\`\`Publicar\`\`\`
   \`\`\`Suas citações,\`\`\`
    \`\`\`E obrigado pelos amigos "que querem em público\`\`\`
.    \`\`\`As citações:)\`\`\`

➲ \`\`\`Por que eu adiciono recursos premium\`\`\`
.. \`\`\`Você conhece Lah por causa desses recursos\`\`\`
   \`\`\`Requer muita cota para fazer o download\`\`\`
    \`\`\`E transmitir áudio / vídeo Yang\`\`\`
     \`\`\`Você pergunta, por favor, entenda\`\`\`
`
}
exports.rules = rules
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Hora ${pad(minutes)} Minuto ${pad(seconds)} Segundo*`
}
