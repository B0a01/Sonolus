const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/sonolus/info', (req, res) => {
  res.json({
    title: "Servidor Sonolus",
    description: "Agora vai funcionar",
    buttons: [],
    levels: {
      items: []
    },
    skins: {
      items: []
    },
    backgrounds: {
      items: []
    },
    effects: {
      items: []
    },
    particles: {
      items: []
    },
    engines: {
      items: []
    }
  });
});

app.listen(PORT, () => {
  console.log('Servidor rodando');
});
