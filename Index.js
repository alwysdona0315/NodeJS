// Index.js
const express = require('express');
const dataSiswa = require('./DataSiswa');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Selamat Datang Di Data Center Siswa Indonesia');
});

app.get('/DataSiswa', (req, res) => {
  res.json(dataSiswa);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});