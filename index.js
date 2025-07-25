const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.post('/webhook', async (req, res) => {
  const message = req.body.message || '⚠️ No message received.';
  try {
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'Markdown'
    });
    res.status(200).send('✅ Message sent to Telegram');
  } catch (error) {
    console.error('Error sending message:', error.message);
    res.status(500).send('❌ Failed to send message');
  }
});

app.get('/', (req, res) => {
  res.send('Telegram Webhook Bot is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));