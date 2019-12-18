import * as TelegramBot from 'node-telegram-bot-api';
import * as fs from 'fs';

export default class ContactsController {
  static TTOKEN = '1039070964:AAEHjR1rUY7ZFH2KLreHub8LQdbGpcbYZOI';
  static PUBLICCHATID = '@bragarchukarchitect';
  static TOPTIONS = { polling: true };

  // Initialize Telegram Bot
  static bot: any = new TelegramBot(ContactsController.TTOKEN, ContactsController.TOPTIONS);;

  static async getChatInfo(req: any, res: any) {
    const chatID = ContactsController.PUBLICCHATID;
    const bot = ContactsController.bot;

    try {
      const chat = await bot.getChat(chatID);
      res.status(200).send(JSON.stringify(chat));
    } catch (e) {
      res.status(403).send({ error: e });
    }
  }

  static async uploadContact(req: any, res: any) {
    const chatID = ContactsController.PUBLICCHATID;
    const bot = ContactsController.bot;

    fs.appendFile('./contacts.txt', ', \n' + JSON.stringify(JSON.parse(req.body), null, 2), () => {
      console.log('File written successfully!');
    });

    try {
      const contact = JSON.parse(req.body);
      const message = `New contact! \nName: ${contact.firstName}, \nSurname: ${contact.lastName}, \nEmail: ${contact.email}`;
      await bot.sendMessage(chatID, message);
    } catch (error) {
      console.error(error);
      return res.status(400).send(error);
    }

    res.status(200).send({ message: 'success' });
  }
}