module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "SHAAN KHAN",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["100016828397863", "100016828397863"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ ERR ] Are Meri Jan Ye Command To Sirf Mere Boss Shaan KO Allowed Hai😏😏", event.threadID, event.messageID);
  api.sendMessage(`[ 𝐎𝐊 ] ${global.config.BOTNAME} 𝐓𝐇𝐊 𝐇𝐀𝐈 𝐁𝐎𝐓 𝐉𝐀𝐍𝐔 𝐁𝐀𝐍𝐃 𝐇𝐎𝐍𝐄 𝐉𝐀 𝐑𝐀𝐇𝐈 𝐇𝐢😪 .`,event.threadID, () =>process.exit(0))
}