import VkBot from 'node-vk-bot-api';
import dayjs from 'dayjs';
import axios from 'axios';
import { IProduct } from 'types';

const bot = new VkBot(String(process.env.TOKEN));

const startBot = function (): void {
  console.log('[~] Bot started');

  bot.on(async (ctx: VkBotContext): Promise<void> => {
    const msg: VkBotMessage | undefined = ctx.message;
    const attachments: VkBotAttachment[] | undefined = msg.attachments;
    const market: VkBotMarket | undefined = attachments?.find((att) => att.type === 'market')?.market;

    if (!market) {
      return;
    }

    const product: IProduct = {
      authorId: msg.from_id,
      productName: market.title,
      body: msg.text?.replaceAll('\n', ' ') as string,
      priceAmount: Math.round(+market.price.amount / 100),
      date: String(dayjs()),
      completed: false,
      chatUrl: `https://vk.com/gim${ctx.groupId}?sel=${msg.from_id}`,
    };

    try {
      await axios.post(`${process.env.API_URL}/products`, product);
    } catch (err) {
      console.log(err);
    }
  });

  bot.startPolling();
};

export default startBot;
