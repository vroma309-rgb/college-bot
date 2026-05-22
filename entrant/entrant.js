function setupEntrant(bot) {
    bot.on('callback_query', (query) => {
        const chatId = query.message.chat.id;
        
        if (query.data === 'entrant') {
            bot.sendMessage(chatId, '🎓 Розділ для вступника.', {
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

module.exports = setupEntrant;