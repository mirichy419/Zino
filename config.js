//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348142909904";
global.sudo = process.env.SUDO || "2348142909904";
global.owner = process.env.OWNER_NUMBER || "4915215117929";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0VhcFk3SUk0QmJYUm12UzVsMFdNNVpuT3pKYWszTlp3dDhLN0trZWdGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblZEc0lJVVdoWC9FRVlQZ0kwK05Zc3dDU2loeHoyNE11M0NUU2ZFTkFBZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRlhCRy9sYXJGOFpJQkEyaVI3aVFpTFRtN0w2NS9zcW9hOEc3TGk0SUd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLR3o5N1ZPbTAxRDhCaWZSaVdXT3FjekhjbjYvb1pIN29OVVRLQlVSQlVjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtPNkVIbzdGay82Zll6WklYSkg1cUkwTXhUUHBFVTVYQWt0T3ExY3RHR3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdSeWZxTjN0OVY2eXlxYzk4YzFGTGJSbm9PMXVYQi9OZWFiR1R3dnNKVVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVkaWdpY1dBak5IQ3RmSFVzWEVqNVBraElTMEQwUjN1cFBZMHZUY3pFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMThWTE1HUk96OFlnYi8rZnVmU0dCUGlzZm9Ta3Nxcm5VUkhlN3lKeXRIdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtsdVk1ZVlHc0wrc1RFNkZlZlkwMXdWS0laSVVjWThTSnNOYjViZUVpOVJzeENhc1VZRFBFL21ITzQxN1FWSjhsMFdQSHJyOFE5ZEFoNmZvN0JUSUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoidlFpYWxhcW90U1lweDF4eHNNRlE3Q0ZaK2k5U2tvdXB4TTk4L1c2N0N1WT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI0OTE1MjE1MTE3OTI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBMUYzQThCOEE2RjQ4RkEyRjdEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzYwOTYxMDV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkNiOVYweFJVU1FtcUJMdDVfODVYV2ciLCJwaG9uZUlkIjoiNjgwMGU5NTQtN2U5MC00YWFmLWI2YzUtNWVmZmE4MzQ4ODRjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUxUTc2WDRuT2tpUzZQUDRXVmg4NVM2MW9yND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UXpUYWdUWHV4MFZJMmlVQlBxVmNQM1ZZOUk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRjRRNUdaTDIiLCJtZSI6eyJpZCI6IjQ5MTUyMTUxMTc5Mjk6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiWmlub2JhYnkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ051VzhJMEpFTmZ5NnJzR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjFPaVRwWEFDVzhla29yYzFkdDNBc2hxbzlPMVZsUW1zWFl2blJrcStNaXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhySWFyUVZRNklVVEpPUDBzbU9Ha2RiaFRXT2hlKy9kV3gzdUtZV2QvZWFRd0N2RWdOV2c2SHJUOEJ4QVFQS1lrWFZjSDVkR2M0L3llTk5TTGE2dkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYL21ZZjdQWXJLZGhtV1U2enlLQWcrcDZUL3lzcEFINDFYR21lZlBmejIvRlVjSzhmZmlNM3BpY3RvTUFjdjgzTk1PMUc3emFEMjlWNEtUb3dmOFBCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQ5MTUyMTUxMTc5Mjk6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZFRvazZWd0FsdkhwS0szTlhiZHdMSWFxUFR0VlpVSnJGMkw1MFpLdmpJciJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjA5NjEwMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHV2kifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "Zinobaby",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
