# CapyMinion-Minecraft-Bot

![Bot Version](https://img.shields.io/badge/Bot%20Version-V1.0.0-blue?logo=javascript&logoSize=1&link=https%3A%2F%2Fgithub.com%2FR3akeOn3%2FCapyMinion-Minecraft-Bot)

### Capy Minion Minecraft Bot
A simple Minecraft bot built with [Mineflayer](https://github.com/PrismarineJS/mineflayer).

---

## Features (Release v1.0.0)
- Reads a **config.JSON** file for configuration.
- Automatically looks at the **nearest player**.

---

### What does the log look like?
The logs include:
- **Line counter**.
- **Current time**.
- **Bot username**.
- **Log type**, such as **Info**, **Warn**, or **Error**.

---

## Log Features
The bot logs the following events:
- Configuration loaded.
- Successful login.
- Player spawn.
- Player death.
- Respawn.

---

## Installation
1. Clone the bot repository.

---

### Configuring "CONFIG.json"
#### General Setup:
Decide whether you are using a **Minecraft Premium account** or a **Minecraft Non-Premium account**.

#### Minecraft Premium Account:
![image](https://github.com/user-attachments/assets/9cfc2588-8130-44ce-ab2d-3f2173cacb3c)
- Set **username** to your account email.
- Set **auth** to `microsoft`.  
  You will be prompted to log in on **microsoft.com** using a code in your browser. After signing in, the bot will automatically obtain and cache authentication tokens for future use.

#### Minecraft Non-Premium Account:
- Set **auth** to `offline`.
- Set **username** to the desired username.

---

### Server Info
You need to configure the server details:  
![image](https://github.com/user-attachments/assets/08bdd089-ce1e-4b95-afff-5b58bf0c904b)

- **host**: Set to the server address, e.g., `"hypixel.net"`. For LAN servers, use `"localhost"`.  
- **version**: Set to `false` for automatic detection, or specify a version (e.g., `"1.8"` to `"1.21"`).  
- **port** and **needsport**:
  - If the server requires a specific port, set **needsport** to `true` and provide the **port** number.
  - For default ports like `"25565"`, set **needsport** to `false`. In this case, the **port** value is ignored.  
- **owner**: Set this to your **main account username**.

---
