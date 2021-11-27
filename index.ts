import { Client, Intents } from "discord.js";

const { token } = require("./config.json");
const client: Client = new Client({ intents: [Intents.FLAGS.GUILDS] });


function initialize(): void {
    client.login(token);
}