const getFbVideoInfo = require("priyansh-fb-downloader");
const axios = require("axios");
const fs = require("fs-extra");
const tempy = require('tempy');

module.exports.config = {
    name: "fbautodownload",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Shaan Khan",
    description: "Downloads Facebook video from HD link provided",
    commandCategory: "utility",
    usages: "[Facebook video URL]",
    cooldowns: 5,
    dependencies: {
        "priyansh-fb-downloader": "2.0.0",
        "axios": "0.21.1",
        "fs-extra": "10.0.0",
        "tempy": "0.4.0"
    }
};

module.exports.handleEvent = async function({ api, event }) {
            if (event.type === "message" && event.body) {
                if (event.body.startsWith("https://www.facebook.com/share/") || event.body.startsWith("https://www.facebook.com/reel/")) {
            try {

            const videoInfo = await getFbVideoInfo(event.body);
            const hdLink = videoInfo.hd;
            const response = await axios.get(hdLink, { responseType: 'stream' });
            const tempFilePath = tempy.file({ extension: 'mp4' });
            const writer = fs.createWriteStream(tempFilePath);
            response.data.pipe(writer);

            writer.on('finish', async () => {
                const attachment = fs.createReadStream(tempFilePath);
                await api.sendMessage({
                    attachment,
                    body: "=𝐎𝐰𝐧𝐞𝐫 ➻     𝐒𝐡𝐚𝐚𝐧 𝐊𝐡𝐚𝐧  ●============================================================●𝐘𝐞𝐋𝐨 𝐀𝐩𝐤𝐢 𝐕𝐢𝐝𝐞𝐨 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐊𝐚𝐫 𝐃𝐢 ✅:"
                }, event.threadID, (err) => {
                    if (err) console.error("Error sending message:", err);
                });
                fs.unlinkSync(tempFilePath);

            });

            writer.on('error', (err) => {
                console.error("Error writing file:", err);
                api.sendMessage("An error occurred while processing the video. Please try again later.", event.threadID, event.messageID);
            });
        } catch (error) {
            console.error('Error downloading Facebook video:', error);
            api.sendMessage("Ye Link Facebook Ka Download Nahi Ho Raha Dosra Try Karo.", event.threadID, event.messageID);
        }
    }
}
};

module.exports.run = async function ({ api, event }) {
  return api.sendMessage(
    `This command does not support direct execution.`,
    event.threadID,
    event.messageID,
  );
};