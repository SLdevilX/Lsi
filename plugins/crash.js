const Xlt = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const Ln = ('This command for any emergency situation about any kind of WhatsApp SPAM in Group');

const code = ('X-Troid‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏‌‏')
Xlt.addCommand({pattern: 'crash', fromMe: true, deleteCommand: false, desc: Ln,}, (async (message, match) => {

  var msg = await message.reply('```generating...```');

  await message.client.sendMessage(

    message.jid,code, MessageType.text);

}));
