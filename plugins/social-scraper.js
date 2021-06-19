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

if (config.WORKTYPE == 'private') {

const Asena = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const axios = require('axios')
const cn = require('../config');

const Language = require('../language')
const { errorMessage, infoMessage } = require('../helpers')
const Lang = Language.getString('instagram')


if (cn.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'readig ?(.*)', fromMe: true, usage: Lang.USAGE, desc: Lang.DESC }, async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const userName = match[1]

        if (userName === '') return await message.client.sendMessage(errorMessage(Lang.NEED_WORD))

        await message.sendMessage(infoMessage(Lang.LOADING))

        await axios
          .get(`https://docs-jojo.herokuapp.com/api/stalk?username=${userName}`)
          .then(async (response) => {
            
            const {
              username,
              biography,
              external_url,
              followers,
              following,
              name,
              category_name,
              is_private,
              is_verified,
              profile_pic,
            } = response.data.result

            const profileBuffer = await axios.get(profile_pic, {
              responseType: 'arraybuffer',
            })

            const msg = (`*${Lang.NAME}*: ${name} \n*${Lang.USERNAME}*: ${username} \n*${Lang.BIO}*: ${biography} \n*${Lang.FOLLOWERS}*: ${followers} \n*${Lang.FOLLOWS}*: ${following} \n*${Lang.ACCOUNT}*: ${is_private ? Lang.HIDDEN : Lang.PUBLIC}`);
            
            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName)),
          )
      },
    )
}
else if (cn.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'ig ?(.*)', fromMe: true, usage: Lang.USAGE, desc: Lang.DESC }, async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        const userName = match[1]

        if (userName === '') return await message.client.sendMessage(errorMessage(Lang.NEED_WORD))

        await message.sendMessage(infoMessage(Lang.LOADING))

        await axios
          .get(`https://docs-jojo.herokuapp.com/api/stalk?username=${userName}`)
          .then(async (response) => {
            const {
              username,
              biography,
              external_url,
              followers,
              following,
              name,
              category_name,
              is_private,
              is_verified,
              profile_pic,
            } = response.data.result

            const profileBuffer = await axios.get(profile_pic, {
              responseType: 'arraybuffer',
            })

            const msg = (`*${Lang.NAME}*: ${name} \n*${Lang.USERNAME}*: ${username} \n*${Lang.BIO}*: ${biography} \n*${Lang.FOLLOWERS}*: ${followers} \n*${Lang.FOLLOWS}*: ${following} \n*${Lang.ACCOUNT}*: ${is_private ? Lang.HIDDEN : Lang.PUBLIC}`);
                        
            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName)),
          )
      },
    )
}	
	
}
