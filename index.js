import * as Discord from "discord.js";
import config from "./config/config.json";

import { DiceRoller } from "rpg-dice-roller";

const client = new Discord.Client();
const roller = new DiceRoller();

const prefix = ",";

client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = message.createdTimestamp - Date.now();
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }
});

client.login(config.BOT_TOKEN);
