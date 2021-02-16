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

  if (command === "r") {
    const [n, dice] = args[0].split("d");
    message.reply(`Numero de dados ${n}`);
    message.reply(`Tipo de dado ${dice}`);

    const roll = roller.roll(args[0]);
    message.reply(`Resultado: ${roll}`);
  }
});

client.login(config.BOT_TOKEN);
