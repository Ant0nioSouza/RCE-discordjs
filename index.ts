import { Client, Intents } from "discord.js";

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
});