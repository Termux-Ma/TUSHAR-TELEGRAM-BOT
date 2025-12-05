# 🚀 Tushar Telegram Bot  
A powerful, modular and premium Telegram bot built using **Node.js**, featuring plugins, dynamic keyboards, AI tools, updates, and full group management.

---

# 📑 Table of Contents
- [✨ Features](#-features)  
- [⚙️ Requirements](#️-requirements)  
- [🐾 Step-by-Step Setup](#-step-by-step-setup)  
- [🔑 How to Get Your Bot Token](#-how-to-get-your-bot-token)  
- [🛠️ How to Run the Bot](#️-how-to-run-the-bot)  
- [♻️ Auto Update System](#-auto-update-system)  
- [🧰 Useful Commands](#-useful-commands)  
- [❓ Troubleshooting](#-troubleshooting)  
- [📞 Contact](#-contact)  

---

## ✨ Features
✔ Modern plugin loader  
✔ Premium `/start` UI  
✔ Per-user dynamic keyboard  
✔ Group management system  
✔ AI chat + downloaders  
✔ Auto-update supported  
✔ Admin notifications & logs  
✔ Clean codebase  

---

## ⚙️ Requirements
- Node.js 18+
- Telegram Bot Token  
- Internet connection  
- Linux/Termux/Windows supported  

---

## 🐾 Step-by-Step Setup

### **1️⃣ Install Node.js**

**Ubuntu / Debian**
```bash
sudo apt update && sudo apt install nodejs npm -y
```

**Termux**
```bash
pkg install nodejs -y
```

---

### **2️⃣ Clone the Project**
```bash
git clone https://github.com/your-username/telegram-bot
cd telegram-bot
```

---

### **3️⃣ Install Needed Packages**
```bash
npm install
```

---

### **4️⃣ Add Bot Token**

Open file:
```
config.js
```

Add:
```js
module.exports = {
  ownerUsernames: ["ARISHAHMEDTUSHAR"],//Your Username
  ownerNumber: "+8801758269324",//Your Number
  autoUpdate: true,
  admin: ["admin id"], // your id
  prefix: "/", // dont change prefix 
  telegramBotToken: "bot token",//Your Bot Tokens
  imageUrl: "https://i.postimg.cc/WpmJhNVg/received-383729254132460.jpg",//Thumbnail Url
  port: process.env.PORT || 8053 || 8053
}
```

---

## 🔑 How to Get Your Bot Token

1. Open Telegram  
2. Search for **@BotFather**  
3. Send:
```
/newbot
```
4. Choose bot name  
5. Choose username (must end with `_bot`)  
6. BotFather sends you:

```
Use this token to access the HTTP API:
1234567890:ABCDEF-your-real-token-here
```

Copy → paste into your config file.

⚠️ **Never share this token with anyone.**

---

## 🛠️ How to Run the Bot

### Start the bot:
```bash
node index.js
```

Bot will start instantly.  
Logs will display in your terminal.

---


## ♻️ Auto Update System

If auto-update is enabled:

```json
"autoUpdate": true
```

Bot updates **automatically** without asking.

If disabled:

```json
"autoUpdate": false
```

Bot will show:
```
Update available!
Do you want to update? (y/n)
```

---

## 🧰 Useful Commands

| Command | Description |
|--------|-------------|
| `/start` | Beautiful premium welcome message |
| `/help` | Show all commands |
| `/ai` | AI chat system |
| `/gemini` | Gemini chat system  |
| `/alldown` | Video downloader system |
| `/keyboardmarkup` | Manage user keyboard |
`/lock` | Group Lock system (photo, name, media, etc.) |
| `/uptime` | Bot Runtime |
| `/broadcast` | Admin broadcast |

---

## ❓ Troubleshooting

### ❌ Bot not responding?
- Check token  
- Run again: `node index.js`  
- Internet connection  

### ❌ "Cannot find module"?
```bash
npm install
```

### ❌ SyntaxError?
Use Node.js 18+.

### ❌ Bot crashing instantly?
Check logs → problem is shown in terminal.

---

## 📞 Contact

**Developer:**  
👤 Mohammad Tushar 
📱 WhatsApp: wa.me/+8801758269324
🔗 Telegram: @ARISHAHMEDTUSHAR 
💻 Facebook: (https://www.facebook.com/arishahmedtushar287)  

---

⭐ If you like this bot, please give a star on GitHub!
