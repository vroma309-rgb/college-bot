function setupContacts(bot) {
    bot.on('callback_query', (query) => {
        const chatId = query.message.chat.id;
        
        if (query.data === 'contacts') {
            bot.sendMessage(chatId, '📞 Телефон: +380991234567\n📧 Email: info@college.ua', {
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

module.exports = setupContacts;