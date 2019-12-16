import * as fs from 'fs';
import * as TelegramBot from 'node-telegram-bot-api';


const TTOKEN = '1039070964:AAEHjR1rUY7ZFH2KLreHub8LQdbGpcbYZOI';
const TOPTIONS = { polling: true };

// Initialize Telegram Bot
const bot = new TelegramBot(TTOKEN, TOPTIONS);
let chatIdA: number;

const api = (router: any) => {
  bot.on('message', (msg) => {
    chatIdA = msg.chat.id;
    console.log('Chat id is updated with ' + msg.chat.first_name);
  });
  router.get('/', (req: any, res: any) => {
    bot.getMe()
      .then((data) => {
        chatIdA = data.id;
        res.status(200).send(JSON.stringify(data));
      })
      .catch((e) => {
        console.error(e);
        res.status(400).send(JSON.stringify(e));
      });
  });
  router.post('/uploadContact', async (req: any, res: any) => {
    fs.appendFile('./contacts.txt', ', \n' + JSON.stringify(JSON.parse(req.body), null, 2), () => {
      console.log('File written successfully!');
    });
    await bot.sendMessage(chatIdA, JSON.stringify(JSON.parse(req.body), null, 2));
    res.status(200).send({ message: 'success' });
  });
  router.get('/getChatInfo', async (req: any, res: any) => {
    try {
      const chat = await bot.getChat(chatIdA);
      res.status(200).send(JSON.stringify(chat));
    } catch (e) {
      res.status(403).send({ error: e });
    }
  });
};

export default api;
