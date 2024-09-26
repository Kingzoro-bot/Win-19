//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2349153850067";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV05ub0xaZS9LbTZjK1VWU1VnRThjU0dtTGNIZU0vYW0wY0xqWlFBdDRIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDBoT1g2S290RlFlNlE3NVVadU1IVHU4b25Kd01nTjFsdzRLUXZOUFVpWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTmxsVTBJaW5FdGx3eis3VzdOeUhTZnk0bjFnTVZPTVllZHNQbkI5dmxnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzcHhmVm5OQlNpYkVlYzU2c1AxdGtxYlNNTmpWKzE5ODZwS09WNXRrVGg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHWTRiQS9BcWJsaExlelBwNUZNQ3JXV1MyZC9ic1Q1VXNBTVRVUVVza1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InU5SE9udU1BTTZYbEJsdnV2UVZTME1VUlM2UXNScENPOTJ2VGdJQmcxeW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEpqTTZ2a0h5eC9WazlpMjNqVkhrakpKa1FUTFlSTkFNMm4xV3l5UTVsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWppUnlQS1VGc2pobzN2aGNQQXVDOE5GK25GMllTSUc2Yk8rOWp3VEpqdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd3OXcwRDRpREcyS00wU2VGUGNGdjMxVWRNQjlVMlVZczNnVmFWODJVb0Y2eW9EcStucWN3am90WTZGbjhrS3c3OGlkcVJlTCtpNmpRMWhWYzFqMERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgxLCJhZHZTZWNyZXRLZXkiOiIrcFA4YkV4Z212MlJYNjkxdVpMWFN3NytORkFDcjRYS3hHYjE1b3VpeE9nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZN0RNMTJwbFJ6U2xZX3dXdGFvUENnIiwicGhvbmVJZCI6IjZhYTBjNzQ5LTQyYmYtNGJkYy1hZWQ3LWU0MGNhMjI1YzRhNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJURnE1TlpYVmFiU1FacHFMUUhMV3diQlh2NDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXNlb3hzT2FwSTh6S2N1dG9EYkMrQ3FyV1ZrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZLSkdBM0ZZIiwibWUiOnsiaWQiOiIyMzQ5MTUzODUwMDY3OjMxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRhcmsifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lqbm0vY0dFT3lLMTdjR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxYZkt1NzFxWlBneXNqbVN3U1ZIUU1SUVlRMTlQaHR4TGhHcFkzTjFRQWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjB6ckQrUVRsbjZJZDdHL2Q3RVRmc3lTSXBJU08wS21TQ3d0UjlYK0x2Q09yUXB5S0dleFVvN2twNkplazZUM2RDQzE5bGVpVzkzbjdsTkZtWVIwaEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIwYTFxdXZMYnZTNXBpUDl0d2xydVluNkxVcVNyUTM4NE5kWHNvMnlDeEpyS3BxY05pQWRqVHp6MG5laXhCcVVPMEZoUnAwdzM0TE5OZGt5TWpISUhBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNTM4NTAwNjc6MzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUzEzeXJ1OWFtVDRNckk1a3NFbFIwREVVR0VOZlQ0YmNTNFJxV056ZFVBSCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzM4MjkwNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBalAifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
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
