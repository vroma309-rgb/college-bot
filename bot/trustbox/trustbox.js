function setupTrustBox(bot) {
    bot.on('callback_query', (query) => {
        const chatId = query.message.chat.id;
        
        if (query.data === 'trust_box') {
            bot.sendMessage(chatId, '📬 Перейди за посиланням:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '📬 Скринька довіри', url: 'https://college.ua/trust-box' }],
                        [{ text: '⬅️ Назад', callback_data: 'back' }]
                    ]
                }
            });
            bot.answerCallbackQuery(query.id);
        }
    });
}

module.exports = setupTrustBox;