

const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
const Asena = require('../events');
const Config = require('../config');
const DD = "turn on disappering mode"
const ON = "Sucsessfuly Turned on"
const UNQ = "wrong command dont type words after command"
const Language = require('../language');
const Lang = Language.getString('admin');
const mut = Language.getString('mute');

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Asena.addCommand({pattern: 'mute ?(.*)', fromMe: true, onlyGroup: true, desc: DD}, (async (message, match) => {    
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (Config.MUTEMSG == 'default') {
        if (match[1] == '') {
            await message.client.toggleDisappearingMessages(
                jid, 
                WA_DEFAULT_EPHEMERAL );
            await message.client.sendMessage(message.jid,ON,MessageType.text);
        }
        else {
            return await message.client.sendMessage(message.jid, UNQ, MessageType.text);
        }
    }
}));
module.exports = {
    checkImAdmin: checkImAdmin
};
