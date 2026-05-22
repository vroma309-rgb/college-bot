require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

const { setupMainMenu } = require('./main/start');
const setupStudent = require('./student/student');
const setupEntrant = require('./entrant/entrant');
const setupContacts = require('./contacts/contacts');
const setupMap = require('./map/map');
const setupTrustBox = require('./trustbox/trustbox');

setupMainMenu(bot);
setupStudent(bot);
setupEntrant(bot);
setupContacts(bot);
setupMap(bot);
setupTrustBox(bot);

console.log('Бот запущено!');