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
    console.log(`New message recieved: ${message.content}`);
    console.log(executeCommand(message.content));
});

function executeCommand(command: string): string {
    let output: string;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            
            console.log(error);
            return error.message;
        } else if (stdout) {
            
            console.log(stdout);
            return stdout;
        }
        
        console.log(stderr);
        return stderr;
    });

    return output;
}
