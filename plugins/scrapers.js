/* 
*/

const thiccysapi = require('textmaker-lasi'); // Import NPM Package

const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = "tttttttt"
if (os.userInfo().homedir !== clh.pay) return;

Asena.addCommand({pattern: 'textdevil ?(.*)', fromMe: true,  }, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/devil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/devil.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textbear ?(.*)', fromMe: true,  }, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/bear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/bear.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textwolf ?(.*)', fromMe: true,  }, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/wolf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/wolf.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textneon ?(.*)', fromMe: true,  }, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/neon.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2neon ?(.*)', fromMe: true,  }, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/neon-text-effect-online-879.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/neon2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/neon2.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textlight ?(.*)', fromMe: true,  }, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/li.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/li.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textjoker ?(.*)', fromMe: true,  }, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/joker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/joker.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textninja ?(.*)', fromMe: true,  }, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/create-ninja-logo-online-935.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/ninja.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/ninja.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textglitter ?(.*)', fromMe: true,  }, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/tt.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/tt.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textbokeh ?(.*)', fromMe: true,  }, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/bkh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/bkh.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textmarvel ?(.*)', fromMe: true,  }, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/marvel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/marvel.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2marvel ?(.*)', fromMe: true,  }, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/mar2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/mar2.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textavengers ?(.*)', fromMe: true,  }, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/aven.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/aven.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textglitch ?(.*)', fromMe: true,  }, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/tt2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/tt2.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textgraf ?(.*)', fromMe: true,  }, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/ttgra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/ttgra.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2graf ?(.*)', fromMe: true,  }, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/t2gra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/t2gra.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textlion ?(.*)', fromMe: true,  }, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/lion.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/lion.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text3neon ?(.*)', fromMe: true,  }, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/neon3.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/neon3.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textice ?(.*)', fromMe: true,  }, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/ice.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/ice.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textspace ?(.*)', fromMe: true,  }, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/space.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/space.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textsmoke ?(.*)', fromMe: true,  }, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/smoke.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/smoke.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textglow ?(.*)', fromMe: true,  }, (async (message, match) => {
    var download = async(uri, filename, callback) => {
        await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    var uri = encodeURI(match[1])
    await download(`https://api.xteam.xyz/photooxy/neonlight?text=${uri}&APIKEY=da5fb2b73ae3e451`, '/root/X-TroidPVT/glowttp.jpg', async() => {                          
        await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/glowttp.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
    })
}));
Asena.addCommand({pattern: 'textfire ?(.*)', fromMe: true,  }, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/tfire.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/tfire.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textharry ?(.*)', fromMe: true,  }, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/hp.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/hp.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text4neon ?(.*)', fromMe: true,  }, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/t4n.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/t4n.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textcemetery ?(.*)', fromMe: true,  }, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/cmth.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/cmth.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textcup ?(.*)', fromMe: true,  }, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/X-TroidPVT/cup.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/X-TroidPVT/cup.jpg'), MessageType.image, { caption: 'Made by WhatsAsena' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
