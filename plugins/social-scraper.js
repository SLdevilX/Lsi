/*
# Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml

*/
const Asena = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const memeMaker = require('meme-maker')
const fs = require('fs')
const Config = require('../config');
const got = require('got');
//LyFE
Asena.addCommand({ pattern: 'ig ?(.*)', fromMe: true, desc: "insta info." }, (async (message, match) => {
	if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a user name.```', MessageType.text, { quoted: message.data });
	let url = `https://docs-jojo.herokuapp.com/api/stalk?username=${match[1]}`
	const response = await got(url);
	const json = JSON.parse(response.body);
	if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
    const pimg = await axios.get(JSON.profile_pic, {
              responseType: 'arraybuffer',
            })
	let msg = '```';
    msg += 'Name      : ' + json.name + '\n\n';
	msg += 'Username      : ' + json.username + '\n\n';
	msg += 'Bio       : ' + json.biography + '\n\n';
	msg += 'Contact      : ' + json.external_url + '\n\n';
	msg += 'Followers   : ' + json.followers + '\n\n';
	msg += 'Following    : ' + json.following + '\n\n';
	msg += 'Category      : ' + json.category_name + '\n\n';
	msg += 'Private   : ' + json.is_private + '\n\n';
	msg += 'Verified     : ' + json.is_verified + '\n\n';
	await message.sendMessage(Buffer.from(pimg.data), MessageType.image, {
              caption: msg,});
}));
