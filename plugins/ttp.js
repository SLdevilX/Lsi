/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Xlt = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('ttp');
const ANIM = "Get random anime waifu wallpapers"

if (Config.WORKTYPE == 'private') {

    Xlt.addCommand({ pattern: 'ttp ?(.*)', fromMe: true, desc: Lang.TTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Xlt.addCommand({ pattern: 'attp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })

    }));

        Xlt.addCommand({ pattern: 'aatp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/flamingtext/vampire?text=${encodeURIComponent(match[1])}&apikey=${Config.CCN}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png })

    }));
    
            Xlt.addCommand({ pattern: 'abtp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/flamingtext/alien?text=${encodeURIComponent(match[1])}&apikey=${Config.CCN}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png })

    }));
            Xlt.addCommand({ pattern: 'actp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/flamingtext/sound?text=${encodeURIComponent(match[1])}&apikey=${Config.CCN}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png })

    }));
             Xlt.addCommand({ pattern: 'adtp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/flamingtext/blackbird?text=${encodeURIComponent(match[1])}&apikey=${Config.CCN}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png })

    }));   


}

// ##############################################################################################################################################################################################################################################################
else if (Config.WORKTYPE == 'public') {

    Xlt.addCommand({ pattern: 'ttp ?(.*)', fromMe: false, desc: Lang.TTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

    }));


    Xlt.addCommand({ pattern: 'attp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);

     var ttinullimage = await axios.get(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })

    }));
    
            Xlt.addCommand({ pattern: 'aatp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/flamingtext/vampire?text=${encodeURIComponent(match[1])}&apikey=${Config.CCN}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png })

    }));

            Xlt.addCommand({ pattern: 'abtp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/flamingtext/alien?text=${encodeURIComponent(match[1])}&apikey=${Config.CCN}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png })

    }));
            Xlt.addCommand({ pattern: 'actp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/flamingtext/sound?text=${encodeURIComponent(match[1])}&apikey=${Config.CCN}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png })

    }));
            Xlt.addCommand({ pattern: 'adtp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/flamingtext/blackbird?text=${encodeURIComponent(match[1])}&apikey=${Config.CCN}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png })

    }));

}
