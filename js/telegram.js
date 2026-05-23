const tg = window.Telegram.WebApp;
tg.expand();

if (tg.themeParams.bg_color) {
    document.body.style.background = tg.themeParams.bg_color;
}
if (tg.themeParams.text_color) {
    document.body.style.color = tg.themeParams.text_color;
}

const user = tg.initDataUnsafe?.user;
if (user) {
    console.log('Користувач:', user.first_name);
}