const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => res.json({ status: 'API is running' }));

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await axios.post('http://localhost:11434/api/chat', {
      model: 'llama3.1',
      messages: [{ role: 'user', content: prompt }],
      stream: false,
    });
    console.log(response);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch response from Ollama' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});