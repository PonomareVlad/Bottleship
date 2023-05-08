import {Bot} from "grammy/web";

const {
    TELEGRAM_BOT_INFO: info,
    TELEGRAM_BOT_TOKEN: token,
} = process.env;

const botInfo = info ? JSON.parse(info) : undefined;

export const bot = new Bot(token, {botInfo});

bot.on("message:text", async ctx => ctx.reply(ctx.msg.text));

export default bot;
