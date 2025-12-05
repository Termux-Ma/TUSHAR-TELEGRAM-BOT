module.exports.config = {
  name: "bc",
  aliases: ["broadcast"],
  description: "Send a broadcast message to all users and groups",
  version: "1.0.2",
  permission: 2,
  prefix: true,
  category: "admin",
  usages: [
    "/bc <message>",
    "Reply to a message with /bc to broadcast it"
  ]
};

module.exports.start = async ({ api, event, args }) => {
  const threadID = event.threadId;

  
  const text = args.join(" ") || (event.messageReply ? event.messageReply.body : "");
  if (!text) return api.sendMessage(threadID, "❌ Please provide a message to broadcast.");

  
  const userGrp = await global.data.get("userGrp.json") || {};
  const users = userGrp.user || {};
  const groups = userGrp.grp || {};

  const targetIds = [
    ...Object.keys(users).filter(id => users[id]),
    ...Object.keys(groups).filter(id => groups[id])
  ];

  if (!targetIds.length) return api.sendMessage(threadID, "⚠️ No users or groups found to broadcast.");

  
  const sentMsg = await api.sendMessage(threadID, "📤 Broadcasting message...");

  let count = 0;
  for (const id of targetIds) {
    try {
      if (id === String(threadID)) continue;
      await api.sendMessage(id, `📢 *Broadcast Message:*\n\n${text}`, { parse_mode: "Markdown" });
      count++;
    } catch (e) {
      console.error(`Failed to send to ${id}:`, e.message);
    }
  }

  return api.sendMessage(threadID, `✅ Broadcast sent to ${count} users/groups.`);
};
