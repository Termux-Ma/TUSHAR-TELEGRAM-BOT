const axios = require("axios");

module.exports = {
  config: {
    name: "bot",
    aliases: ["sim"],
    prefix: "auto",
    permission: 0,
    description: "AI Chat using handleReply (Telegram)",
  },

  start: async function ({ api, event, args }) {
    const { threadId, senderId, body } = event;
    const usermsg = body || "";

    
    if (!usermsg) {
      const greetings = [
        "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘",
        "কি গো সোনা আমাকে ডাকছ কেনো",
        "বার বার আমাকে ডাকস কেন😡",
        "আহ শোনা আমার আমাকে এতো ডাকতাছো কেনো আসো বুকে আশো🥱",
        "হুম জান তোমার অইখানে উম্মমাহ😷😘",
        "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি",
        "আমাকে এতো না ডেকে বস নয়নকে একটা গফ দে 🙄"
      ];

      const randomMessage =
        greetings[Math.floor(Math.random() * greetings.length)];

      const sent = await api.sendMessage(
        threadId,
        randomMessage,
        {reply_to_message_id: event.msg.message_id}
      );

      global.client.handleReply.push({
        name: this.config.name,
        messageID: sent.message_id,
        author: senderId,
        type: "chat"
      });

      return;
    }

    
    try {
      const apis = await axios.get(
        "https://raw.githubusercontent.com/MOHAMMAD-NAYAN-07/Nayan/main/api.json"
      );
      const apiurl = apis.data.api;

      const response = await axios.get(
        `${apiurl}/sim?type=ask&ask=${encodeURIComponent(usermsg)}`
      );

      const replyText = response.data.data?.msg || "🤖 I don't understand.";

      const sent = await api.sendMessage(threadId, replyText, {reply_to_message_id: event.msg.message_id});

      global.client.handleReply.push({
        name: this.config.name,
        messageID: sent.message_id,
        author: senderId,
        type: "chat"
      });

    } catch (err) {
      console.log("❌ Bot error:", err.message);
      api.sendMessage(threadId, "❌ Bot API not responding.");
    }
  },

  handleReply: async function ({ api, event, handleReply }) {
    const { threadId, senderId, body } = event;

    if (senderId !== handleReply.author) return;

    try {
      const apis = await axios.get(
        "https://raw.githubusercontent.com/MOHAMMAD-NAYAN-07/Nayan/main/api.json"
      );
      const apiurl = apis.data.api;

      const response = await axios.get(
        `${apiurl}/sim?type=ask&ask=${encodeURIComponent(body)}`
      );

      const replyText = response.data.data?.msg || "🤖 I don't understand.";

      const sent = await api.sendMessage(threadId, replyText, {reply_to_message_id: event.msg.message_id});

      global.client.handleReply.push({
        name: this.config.name,
        messageID: sent.message_id,
        author: senderId,
        type: "chat"
      });

    } catch (err) {
      console.log("❌ handleReply error:", err.message);
      api.sendMessage(threadId, "❌ Error continuing conversation.");
    }
  }
};
