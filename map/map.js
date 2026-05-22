function setupMap(bot) {
    bot.on('callback_query', (query) => {
        const chatId = query.message.chat.id;
        
        if (query.data === 'map') {
            bot.sendLocation(chatId, 50.4501, 30.5234);
            bot.sendMessage(chatId, '📍 вул. Центральна, 10', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '⬅️ Назад', callback_data: 'back' }]
                    ]
                }
            });
            bot.answerCallbackQuery(query.id);
        }
    });
}

module.exports = setupMap;