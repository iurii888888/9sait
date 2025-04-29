// static-server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Серверим папку out/ как статику
app.use(express.static(path.join(__dirname, 'out')));

// Отдаём index.html на все запросы (для SPA-роутинга)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

app.listen(port, () => {
  console.log(`> Static server ready on http://localhost:${port}`);
});
