
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUSXLjNhS9She2UrU4S1SVq0LKFEVRMylTcqoXIAkOFicB4KQu5QY5SRZdOYNzsBRlu92LpONwBX4A7z28P3wFWR4TZKIWjL+CAscVpKhb0rZAYAzUMggQBn3gQwrBGDCG2iTrWbkID6m0aJ56nONo+XTXmyXYsat6vTZCOEzZ0DHuwLUPitJNYu9ngELFrbdYnCx6rhAIO+fiewOhJ/cyjaqHqH4ktda08smNhDtw7RBhjOMs1IoIpQjDxETtBsb4Y/LNVa5DpvdwNgT2YjwIWib4ubFbiPdno/RW9dTw5UXl+562/Jj8ox2fuKEqPOaGz7ZlrM/dvLZN2ymIWxu8k+8j5RIY50m2f5FP4jBDvuGjjMa0/bDvjmJGwkEyOYdZEqQujtLQ7ZUp2QtSOdViMt0UAUTzYpJ4HxNOiuqYbhdKfr5g5liLDPvAb+l9qe2cWZWNdCyZeig1JrbzH4Vv8FutnP6P79r0IGpi7W/hoFqFlj4/lnCqi8HcLvm1PmNGiwFnlJu25EYfk+94FicoND+LTmwFziETMp8thFrkN2QKe3A92Wa4Ps6PT8q7fEhL/DOV+zTYraNVs5CccrS3/fBQBxk77U03cGWcLMychcEi3YyOLrsMmqdqvQvWJAgP0NMzf2knfrkyGf4AxajdzzaxrZgLWQ3vbi86odbwwZi99gFGYUwohjTOsy4myn0A/cpCHkb05i5IRTY/zhR7oCmnR7mZ8hZaSDO9F3POAPGCZ8WnZXAYzmWJ3IE+KHDuIUKQP4sJzXG7RITAEBEw/vVLH2SooS9569h4tg+CGBO6z8oiyaH/ltS3Teh5eZlRq828SbdAGIyZ9zCiNM5C0tlYZhB7UVyhSQQpAeMAJgR9fyDCyH+Nfb/d3fIRhXFCwBhMzHsjOm91bY4X7MjQddUIlUmogHe2t6y92DKznial+LSqqqC8nLjVQG3EFR/YvToytPKxJw2mvm7ay9lJuPsHEDAGim9hw02ObWs/Lu8HTEicNnRdA8F4O5o4VN2TqNHNtS0U3Dww6l1S14hRhGY351MtQ2fquaOdQPfqg6Avj9x+qQzu67uOzUdV7KEfyXYjT+JWCRKmxT1OZnmcycQaThV3beVUcjb8Sd+cqyrLZ9ZWZLMR3qqJaxrR7mFeNtaI32yxTGdDWWhybRWKzXlor29k1z5Ib4Uc+2AMOH4oDeWRIEqyMObEX8jnussHLIrPGaKgDzLYnQbL529//X56/vb8R5J8+u2T+fzn87cwogT0QXIDkliGlxhZZjiekW5QXfyteZLXoRXf6qrj7n6DGN1mwCvHf2p5camrNeba/wHjdar8S2eqOyavcXm8uEN+SMTVU1B7yPZ5ZkAMS12kQVk1h118uqjiGlyvX/qgSCANcpx2oy51IegDnJdd5RpZkP+EaaLsDeW1ZxNIqPLeDXacIkJhWoAxOxQZQZRH7PDl1AbnxQySCIxBlvKqC/ogbZWisCikb70FlO5bZztw/Ru8VMRbdgcAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237679845694", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "MICKIELL-KNIGHT", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "KNIGHTS", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
