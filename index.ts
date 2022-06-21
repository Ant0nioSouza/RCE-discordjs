import { Client, Intents } from "discord.js";
import { exec } from "child_process";

const { token } = require("./config.json");
const client: Client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

initialize()

function initialize(): void {
    console.log("Connecting...")
    client.login(token);
}

client.on("ready", (): void => {
    console.log("Bot online!")
});

client.on("messageCreate", (message): void => {
    if (message.author.id != "914217785360539688") {
        console.log(`New message recieved: ${message.content}`);
        executeCommand(message.content, message.channel); 
    }
});

function executeCommand(command: string, msgChannel): void {
    var output: string;
    exec(command, (error, stdout, stderr) => {
        msgChannel.send(stdout); 
        if (error) {
            return error.message;
        } else if (stdout) {
            return stdout;
        }
        console.log(stderr);
        return stderr;
    });
}
