const mainKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [{ text: '🌐 Веб-додаток', web_app: { url: 'https://твій-url.com' } }],
            [{ text: '🎓 Вступнику', callback_data: 'entrant' }, { text: '🧑‍🎓 Студенту', callback_data: 'student' }],
            [{ text: '📞 Контакти', callback_data: 'contacts' }, { text: '📍 Ми на мапі', callback_data: 'map' }],
            [{ text: '📬 Скринька довіри', callback_data: 'trust_box' }]
        ]
    }
};

function showMainMenu(bot, chatId, name) {
    bot.sendMessage(chatId, `Привіт! 👋 Це чат-бот НЕФКу — Нововолинського електромеханічного фахового коледжу. Обери, що цікавить 🤗↓`, mainKeyboard);
}
 
function setupMainMenu(bot) {
    bot.onText(/\/start/, (msg) => {
        showMainMenu(bot, msg.chat.id, msg.from.first_name);
    });

    bot.on('callback_query', (query) => {
        if (query.data === 'back') {
            showMainMenu(bot, query.message.chat.id, query.from.first_name);
            bot.answerCallbackQuery(query.id);
        }
    });
}

module.exports = { setupMainMenu };