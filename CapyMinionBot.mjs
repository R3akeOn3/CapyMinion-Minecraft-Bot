// Code writted by: R3akeOn3_
// github: https://github.com/R3akeOn3/CapyMinion-Minecraft-Bot
// Do not copy 

import mineflayer from "mineflayer";
import { readFile} from "fs/promises";
import chalk from "chalk";

let botArgs = {};
let consoleCounter = 0;

async function readConfigFile() {
    try {
        const data = await readFile("./config/CONFIG.json", "utf8");
        const config = JSON.parse(data);
        botArgs.host = config.host;
        botArgs.auth = config.auth;
        botArgs.username = config.username;
        botArgs.owner = config.owner
        console.log(`Loaded config: `, config);

        botArgs.port = config.needsPort ? config.port : undefined;

        return config;
        } catch (error) {   
        console.error("Error reading or parsing CONFIG.json:", error);
        throw error;
    }}

class CapyMinionBot { // Main bot class

    constructor() {
        this.username = botArgs.username;
        this.auth = botArgs.auth;
        this.host = botArgs.host;
        this.port = botArgs.port;
        this.version = botArgs.version;
        this.owner = botArgs.owner;
        
        this.initBot();
    }
        initBot() {
            this.bot = mineflayer.createBot({
                username: this.username,
                auth: this.auth,
                host: this.host,
                port: this.port,
                version: this.version,
                owner: this.owner,
                hideErrors: true,               
            });
            this.initEvents();  
        }
    log(...msg) {
        const counter = `${chalk.hex('#1f1f1f')(`[${consoleCounter}]`)}` // line counter
        consoleCounter += 1;
        const LocalTime = chalk.gray `[${(new Date().toLocaleString('pl-PL', {second: '2-digit', minute: '2-digit', hour: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric'}))}]` //local time
        console.log(`${counter} ${LocalTime} ${chalk.blue(`[${this.bot.username}]`)} - ${msg}`) //log
    }
    logInfo(...msg) {
        const Info = chalk.rgb(60, 206, 58)(`[Info] `)
        this.log(Info + msg)
            }
        logWarn(...msg) {
            const Warn = chalk.rgb(206, 174, 58)(`[Warn] `)
            this.log(Warn + msg)
        }
        logWrong(...msg) {
            const Wrong = chalk.rgb(209, 47, 47)(`[Wrong] `)
            this.log(Wrong + msg)
        }
        logError(...msg) {
            const Error = chalk.rgb(209, 47, 47)(`[Error] `)
            this.log(Error + msg)
        }
        initEvents() {
            this.bot.once('login', () => {
                let botSocket = this.bot._client.socket;
                this.log(chalk.rgb(34, 115, 33)(`[Logging Log] `) + `Logged into ${this.bot.username}, ${botSocket.server || botSocket._host} : ${botArgs.port}`)
        });
            this.bot.once('spawn', () => { this.log(chalk.rgb(34, 115, 33)(`[Spawn Log] `) + `I Spawned! My coords is ${this.bot.entity.position}, With Healt ${this.bot.health}, `)
        });
            this.bot.on('respawn', () => { this.logWarn(`I Respawn!, My coords is ${this.bot.entity.position}.`)
        });
            this.bot.on('death', () => { this.logWrong(`I Death :c, Near Players`) 
            });
            this.bot.on('move', () => { let targetplayer = this.bot.nearestEntity(entity => entity.type === 'player'); 
                if (targetplayer){ this.bot.lookAt(targetplayer.position.offset(0, targetplayer.height, 0)) }});
        }
    }

async function initializeBot() {
    await readConfigFile();
    const botInstance = new CapyMinionBot();
}
initializeBot();
