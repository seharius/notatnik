const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let notes = [];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'password') {
    res.status(200).json({ message: 'Zalogowano pomyślnie' });
  } else {
    res.status(401).json({ message: 'Błędne dane logowania' });
  }
});

app.post('/notes', (req, res) => {
  const { title, content } = req.body;

  notes.push({ title, content });

  res.status(201).json({ message: 'Notatka dodana pomyślnie' });
});

app.get('/notes', (req, res) => {
  res.status(200).json(notes);
});

app.listen(PORT, () => {
  console.log(`Serwer uruchomiony na porcie ${PORT}`);
});