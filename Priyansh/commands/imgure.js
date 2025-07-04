const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

const csbApi = async () => {
  const base = await axios.get("https://raw.githubusercontent.com/nazrul4x/Noobs/main/Apis.json");
  return base.data.csb;
};

module.exports.config = {
  name: "imgur",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shaan", // 👈 As per your request, credit only as "Raj"
  description: "Upload image to Imgur",
  commandCategory: "tools",
  usages: "[reply to image]",
  cooldowns: 3
};

module.exports.run = async function ({ api, event }) {
  const { messageReply, attachments, threadID, messageID } = event;
  let imageUrl;

  if (event.type === "message_reply" && messageReply.attachments.length > 0) {
    imageUrl = messageReply.attachments[0].url;
  } else if (attachments.length > 0) {
    imageUrl = attachments[0].url;
  } else {
    return api.sendMessage("⚠️ कृपया किसी image पर reply करें या image भेजें।", threadID, messageID);
  }

  try {
    const res = await axios.get(`${await csbApi()}/nazrul/imgur?link=${encodeURIComponent(imageUrl)}`);
    const uploadedLink = res.data.uploaded?.image;

    if (!uploadedLink) {
      return api.sendMessage("❌ Imgur पर upload नहीं हो पाया।", threadID, messageID);
    }

    return api.sendMessage(`✅ Image uploaded:\n${uploadedLink}`, threadID, messageID);
  } catch (err) {
    console.error(err);
    return api.sendMessage("❌ Image upload में समस्या आई। बाद में try करें।", threadID, messageID);
  }
};