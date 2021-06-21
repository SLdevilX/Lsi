/* 
lasi
*/

import { textpro, photooxy } from 'textmaker-lasi'; // Import NPM Package

import { addCommand } from '../events';
import { MessageType, GroupSettingChange, Mimetype, MessageOptions } from '@adiwajshing/baileys';
import { createWriteStream, readFileSync } from 'fs';
import { LANG, WORKTYPE, CAPTION_KEY } from '../config';
import axios from 'axios';
import request, { head } from 'request';
import { userInfo } from 'os';
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''
if (LANG == 'TR') desc_msg = 'Shows textmaker tools with unlimited access.'
if (LANG == 'EN') desc_msg = 'Shows textmaker tools with unlimited access.'
if (userInfo().homedir !== clh.pay) return;
let wk = WORKTYPE == 'public' ? false : true

addCommand({pattern: 'textmaker$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
    var t9 = ''
    var t10 = ''
    var t11 = ''
    var t12 = ''
    var t13 = ''
    var t14 = ''
    var t15 = ''
    var t16 = ''
    var t17 = ''
    var t18 = ''
    var t19 = ''
    var t20 = ''
    var t21 = ''
    var t22 = ''
    var t23 = ''
    var t24 = ''
    var t25 = ''
    var t26 = ''
    var t27 = ''
    var t28 = ''
    var t29 = ''
    if (LANG == 'EN' || LANG == 'SI') {
        t1 = 'Makes Devil Themed Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes Logo With Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes Logo With Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes Logo With Second Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes Lightning Themed Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Makes Glitter Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes a Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes a Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Makes a Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Makes a Glow Themed Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Makes Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Makes a Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Makes a Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Makes a Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Makes a Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
    }
    else {
        t1 = 'Makes Devil Themed Logo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Makes Logo With Bear Icon.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Makes Logo With Neon Effect.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Makes Logo With Second Neon Effect.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Makes Lightning Themed Logo.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Makes Joker Themed Logo.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Makes Ninja Themed Logos.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Makes Glitter Themed Logo.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Makes Logo With Bokeh Effect.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Makes Logo With Wolf Icon.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Makes Black And White Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Makes Colorful Marvel Logo.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Makes The Avengers Logo.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Makes Logo With Glitch Effect.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Makes Graffiti Themed Logo.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Makes a Second Graffiti Themed Logo.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Makes Lion Themed Logo.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Makes a Third Neon Themed Logo.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Makes Ice Themed Logo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Makes Space Themed Logo.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Makes Logo With Smoke Effect.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Makes a Naruto Themed Logo.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Makes a Glow Themed Logo.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Makes Flame Themed Logo.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Makes a Harry Potter Themed Logo.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Makes a Fourth Neon-Themed Logo.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Makes a Cemetery Themed Logo.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Makes a Cup Themed Logo.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
    }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (LANG == 'EN' || LANG == 'SI') {
        usage_cmd = '⌨️ *Örnek:* _'
        command_cmd = '💻 *Komut:* '
        desc_cmd = 'ℹ️ *Açıklama:* _'
    } else { 
        usage_cmd = '*⌨️ Example:* _'
        command_cmd = '💻 *Command:* '
        desc_cmd = 'ℹ️ *Description:* _'
    }
    const msg = command_cmd + '```.textdevil``` \n' + t1 + '_\n' + usage_cmd + '.textdevil Phaticusthiccy_\n\n' +
        command_cmd + '```.textbear``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '.textbear Phaticusthiccy_\n\n' +
        command_cmd + '```.textwolf``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '.textwolf Developer;Phaticusthiccy_\n\n' +
        command_cmd + '```.textneon```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '.textneon Phaticusthiccy_\n\n' +
        command_cmd + '```.text2neon``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '.text2neon Phaticusthiccy_\n\n' +
        command_cmd + '```.text3neon``` \n' + desc_cmd + t18 + '_\n' + usage_cmd + '.text3neon Phaticusthiccy_\n\n' +
        command_cmd + '```.text4neon``` \n' + desc_cmd + t27 + '_\n' + usage_cmd + '.text4neon Phaticusthiccy_\n\n' +
        command_cmd + '```.textlight``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '.textlight Phaticusthiccy_\n\n' +
        command_cmd + '```.textjoker``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '.textjoker Phaticusthiccy_\n\n' +
        command_cmd + '```.textninja``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '.textninja Developer;Phaticusthiccy_\n\n' +
        command_cmd + '```.textglitter``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '.textglitter Phaticusthiccy_\n\n' +
        command_cmd + '```.textbokeh``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '.textbokeh Phaticusthiccy_\n\n' +
        command_cmd + '```.textmarvel``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '.textmarvel Developer;Phaticusthiccy_\n\n' +
        command_cmd + '```.text2marvel``` \n' + desc_cmd + t12 + '_\n' + usage_cmd + '.text2marvel Developer;Phaticusthiccy_\n\n' +
        command_cmd + '```.textavengers``` \n' + desc_cmd + t13 + '_\n' + usage_cmd + '.textavengers Developer;Phaticusthiccy_\n\n' +
        command_cmd + '```.textgraf``` \n' + desc_cmd + t15 + '_\n' + usage_cmd + '.textgraf Developer;Phaticusthiccy_\n\n' +
        command_cmd + '```.text2graf``` \n' + desc_cmd + t16 + '_\n' + usage_cmd + '.text2graf Developer;Phaticusthiccy_\n\n' +       
        command_cmd + '```.textlion``` \n' + desc_cmd + t17 + '_\n' + usage_cmd + '.textlion Developer;Phaticusthiccy_\n\n' +
        command_cmd + '```.textice``` \n' + desc_cmd + t19 + '_\n' + usage_cmd + '.textice Phaticusthiccy_\n\n' +
        command_cmd + '```.textspace``` \n' + desc_cmd + t20 + '_\n' + usage_cmd + '.textspace Developer;Phaticusthiccy_\n\n' +
        command_cmd + '```.textsmoke``` \n' + desc_cmd + t21 + '_\n' + usage_cmd + '.textsmoke Phaticusthiccy_\n\n' + // Thanks for @Unique_hunter for base.
        command_cmd + '```.textglow``` \n' + desc_cmd + t23 + '_\n' + usage_cmd + '.textglow Phaticusthiccy_\n\n' +
        command_cmd + '```.textfire``` \n' + desc_cmd + t25 + '_\n' + usage_cmd + '.textfire Phaticusthiccy_\n\n' +
        command_cmd + '```.textharry``` \n' + desc_cmd + t26 + '_\n' + usage_cmd + '.textharry Phaticusthiccy_\n\n' +
        command_cmd + '```.textcup``` \n' + desc_cmd + t29 + '_\n' + usage_cmd + '.textcup Phaticusthiccy_\n\n' +
        command_cmd + '```.textcemetery``` \n' + desc_cmd + t28 + '_\n' + usage_cmd + '.textcemetery Phaticusthiccy_\n\n' +
        command_cmd + '```.textglitch``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '.textglitch Developer;Phaticusthiccy_'
    await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })
}));
addCommand({pattern: 'textdevil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/devil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/devil.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textbear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/bear.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textwolf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/wolf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/wolf.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textneon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/neon.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'text2neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    textpro("https://textpro.me/neon-text-effect-online-879.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/neon2.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textlight ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    textpro("https://textpro.me/thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/li.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/li.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textjoker ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/joker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/joker.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textninja ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    textpro("https://textpro.me/create-ninja-logo-online-935.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ninja.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/ninja.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textglitter ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tt.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/tt.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textbokeh ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bkh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/bkh.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textmarvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/marvel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/marvel.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'text2marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/mar2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/mar2.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textavengers ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/aven.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/aven.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textglitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tt2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/tt2.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textgraf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ttgra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/ttgra.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'text2graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t2gra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/t2gra.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textlion ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    textpro("https://textpro.me/create-lion-logo-mascot-online-938.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/lion.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/lion.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'text3neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    textpro("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon3.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/neon3.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textice ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ice.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/ice.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textspace ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/space.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/space.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textsmoke ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/smoke.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/smoke.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textglow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var download = async(uri, filename, callback) => {
        await head(uri, async(err, res, body) => {    
            await request(uri).pipe(createWriteStream(filename)).on('close', callback);
        });
    };
    var uri = encodeURI(match[1])
    await download(`https://api.xteam.xyz/photooxy/neonlight?text=${uri}&APIKEY=da5fb2b73ae3e451`, '/root/WhatsAsenaDuplicated/glowttp.jpg', async() => {                          
        await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/glowttp.jpg'), MessageType.image, { caption: CAPTION_KEY })
    })
}));
addCommand({pattern: 'textfire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tfire.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/tfire.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textharry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/hp.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/hp.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'text4neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t4n.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/t4n.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textcemetery ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/cmth.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/cmth.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
addCommand({pattern: 'textcup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await head(uri, async(err, res, body) => {    
                      await request(uri).pipe(createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/cup.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,readFileSync('/root/WhatsAsenaDuplicated/cup.jpg'), MessageType.image, { caption: CAPTION_KEY })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
