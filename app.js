require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;
const isMock = process.env.MOCK_AI === 'true';

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('chat');
});


app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;


  if (isMock) {
    return res.json({
      reply: `[MOCK MODE] Halo! Kamu bilang: "${userMessage}"`
    });
  }





  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openrouter/llama-2-7b-chat:free', 
        messages: [{ role: 'user', content: userMessage }]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: 5000 
      }
    );

    let reply = 'AI tidak memberikan jawaban';
    if (response.data?.choices?.[0]?.message?.content) {
      reply = response.data.choices[0].message.content;
    }

    return res.json({ reply });

  } catch (err) {
    console.error(
      'OpenRouter error:',
      err.response?.status,
      err.response?.data || err.message
    );

    return res.json({
      reply: `[FALLBACK] AI sedang tidak tersedia. Pesan kamu: "${userMessage}"`
    });
  }
});

app.listen(PORT, () => {
  console.log(`Chatbot running on http://localhost:${PORT}`);
});
