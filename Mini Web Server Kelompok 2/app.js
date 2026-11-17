const express = require('express');
const app = express();
const startTime = new Date().toLocaleString('id-ID');

const student = [
  {
    Nama: "Warda Amalia",
    NIM: "20250040003",
    Kelas: "TI25E"
  },
  {
    Nama: "Zakka Tamma Kawakibi Riyadi",
    NIM: "2025004007",
    Kelas: "TI25E"
  },
  {
    Nama: "Nazwa Dwianti",
    NIM: "20250040017",
    Kelas: "TI25E"
  },
  {
    Nama: "M.Fallah",
    NIM: "20250040047",
    Kelas: "TI25E"
  }
];

app.get('/', (req, res) => {
    res.send('Selamat Datang Di Server Kelompok 2, Server Berjalan Dengan Cepat!');
});

app.get('/anggota', (req, res) => {
    res.json(student);
});

app.get('/info', (req, res) => {
    const currentTime = new Date().toLocaleString('id-ID');

    res.send(`<h2>Informasi Server Kelompok 2</h2>
        <p>Server Mulai Dijalankan: ${startTime}</p>`);
});

app.listen(8000, () => {
    console.log('Server berjalan pada http://localhost:8000');
    console.log('Tanggal dan Waktu Server: ' + startTime);
});
