const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  res.json({ users: ['João', 'Maria'] });
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  // Lógica de criação...
  res.status(201).json(newUser);
});

app.listen(3000);