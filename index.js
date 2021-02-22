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
  args[0] = args[0].toLowerCase();
  const command = args.shift().toLowerCase();
  console.log(command);

  if (command === "r") {
    const roll = roller.roll(args[0]);
    message.reply(`Resultado: ${roll}`);
  }

  if (command === "rm") {
    const roll = roller.roll(args[0]);
    const mensagem = `${message.author.username} - Resultado: ${roll}`;
    client.users.cache.get("204754225140465675").send(mensagem);
  }
});

client.login(config.BOT_TOKEN);
