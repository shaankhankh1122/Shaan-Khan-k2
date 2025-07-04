 const fs = require("fs");
module.exports.config = {
	name: "Shaan",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Shaan", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("Shaan") || 
react.includes("shan")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n✦𝐒𝐡𝐚𝐚𝐧 𝐊𝐡𝐚𝐧✦\n\n★★᭄𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐋𝐢𝐧𝐤 :\n\n✦ https://youtube.com/@shaankhank345 ✦ \n𝗝𝗼𝗶𝗻 𝗢𝘂𝗿 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗜𝗱 \n 𝗦𝗛𝗔𝗔𝗡 𝗞𝗛𝗔𝗡 😋https://www.facebook.com/profile.php?id=100016828397863`",
				attachment: fs.createReadStream(__dirname + `/noprefix/1743695697745.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }