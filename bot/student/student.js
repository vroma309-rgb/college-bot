function setupStudent(bot) {
    bot.on('callback_query', (query) => {
        const chatId = query.message.chat.id;
        const data = query.data;
        
        // ============================================
        // ГОЛОВНЕ МЕНЮ СТУДЕНТА
        // ============================================
        if (data === 'student') {
            bot.sendMessage(chatId, '🧑‍🎓 Студенту\n\nОбери потрібний розділ:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '📅 Розклад', callback_data: 'student_schedule' }, { text: '🎯 Моя спеціальність', callback_data: 'student_specialty' }],
                        [{ text: '📝 Зразки заяв', callback_data: 'student_docs' }, { text: '🎉 Студентське життя', callback_data: 'student_life' }],
                        [{ text: '⬅️ Назад', callback_data: 'back' }]
                    ]
                }
            });
            bot.answerCallbackQuery(query.id);
        }
        
        // ============================================
        // РОЗКЛАД
        // ============================================
        if (data === 'student_schedule') {
            bot.sendMessage(chatId, '🧑‍🎓 Студенту > Розклад\n\nОбери що показати:', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Пари', callback_data: 'schedule_lessons' }, { text: 'Дзвінки', callback_data: 'schedule_bells' }],
                        [{ text: '⬅️ Назад', callback_data: 'student' }]
                    ]
                }
            });
            bot.answerCallbackQuery(query.id);
        }
        
        // ============================================
        // РОЗКЛАД > ПАРИ
        // ============================================
        if (data === 'schedule_lessons') {
            bot.sendMessage(chatId, '🧑‍🎓 Студенту > Розклад > Пари\n\nТут буде розклад пар.', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '⬅️ Назад', callback_data: 'student_schedule' }]
                    ]
                }
            });
            bot.answerCallbackQuery(query.id);
        }
        
        // ============================================
        // РОЗКЛАД > ДЗВІНКИ
        // ============================================
        if (data === 'schedule_bells') {
            bot.sendMessage(chatId, 
                '🧑‍🎓 Студенту > Розклад > Дзвінки\n\n' +
                'Пн, Вт, Ср, Чт:\n' +
                '1. 08:30-09:50\n' +
                '2. 10:05-11:25\n' +
                '3. 12:05-13:25\n' +
                '4. 13:40-15:00\n\n' +
                'Пт, Сб:\n' +
                '1. 08:30-09:50\n' +
                '2. 10:05-11:25\n' +
                '3. 11:45-13:05\n' +
                '4. 13:20-14:40'
            , {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '⬅️ Назад', callback_data: 'student_schedule' }]
                    ]
                }
            });
            bot.answerCallbackQuery(query.id);
        }
        
        // ============================================
        // МОЯ СПЕЦІАЛЬНІСТЬ
        // ============================================
        if (data === 'student_specialty') {
            bot.sendMessage(chatId, '🧑‍🎓 Студенту > Моя спеціальність\n\nТут буде інформація про спеціальності.', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '⬅️ Назад', callback_data: 'student' }]
                    ]
                }
            });
            bot.answerCallbackQuery(query.id);
        }
        
        // ============================================
        // ЗРАЗКИ ЗАЯВ
        // ============================================
        if (data === 'student_docs') {
            bot.sendMessage(chatId, '🧑‍🎓 Студенту > Зразки заяв\n\nТут будуть зразки заяв.', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '⬅️ Назад', callback_data: 'student' }]
                    ]
                }
            });
            bot.answerCallbackQuery(query.id);
        }
        
        // ============================================
        // СТУДЕНТСЬКЕ ЖИТТЯ
        // ============================================
        if (data === 'student_life') {
            bot.sendMessage(chatId, '🧑‍🎓 Студенту > Студентське життя\n\nТут буде інформація про студентське життя.', {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: '⬅️ Назад', callback_data: 'student' }]
                    ]
                }
            });
            bot.answerCallbackQuery(query.id);
        }
    });
}

module.exports = setupStudent;