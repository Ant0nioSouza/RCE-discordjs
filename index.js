"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var child_process_1 = require("child_process");
var token = require("./config.json").token;
var client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES] });
initialize();
function initialize() {
    console.log("Connecting...");
    client.login(token);
}
client.on("ready", function () {
    console.log("Bot online!");
});
client.on("messageCreate", function (message) {
    console.log("New message recieved: ".concat(message.content));
    console.log(executeCommand(message.content));
});
function executeCommand(command) {
    var output;
    (0, child_process_1.exec)(command, function (error, stdout, stderr) {
        if (error) {
            console.log(error);
            return error.message;
        }
        else if (stdout) {
            console.log(stdout);
            return stdout;
        }
        console.log(stderr);
        return stderr;
    });
    return output;
}
