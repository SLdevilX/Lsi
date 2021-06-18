/*
# Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml

*/

const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
//LyFE
Asena.addCommand({ pattern: 'sty ?(.*)', fromMe: false, desc: "Shows movie info." }, (async (message, match) => {
	if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = `https://bx-hunter.herokuapp.com/api/fancytext?text=${match[1]}&apikey=ikygans`
	const response = await got(url);
	const json = JSON.parse(response.body);
	if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
	let msg = '💛';
	msg += 'Styles      : ' + json.result + '\n\n';

	await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
}));
