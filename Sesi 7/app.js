const express = require('express');
const app = express();

const product = [
    {
        ID: "A12",
        Nama: "Headseat",
        Stock: "10",
        Harga: "20000"
    },
    {
        ID: "B12",
        Nama: "Mouse",
        Stock: "5",
        Harga: "50000"
    },
    {
        ID: "C12",
        Nama: "Tumbler",
        Stock: "5",
        Harga: "70000"
    }
];

app.get('/', (req, res) => {
    res.send('Halaman Utama');
});

app.get('/about', (req, res) => {
    res.send('Halaman Tentang Kami');
});

app.get('/contact', (req, res) => {
    res.send('Hubungi Kami di routing-app');
});

app.get('/product', (req, res) => {
    res.send(product);
});

app.get('/product/:kode', (req, res) => {
    // const kode = req.params.kode;
    res.send('Product dengan kode: ' + req.params.kode);
});

app.get('/users/:nama', (req, res) => {
    const nama = req.params.nama;
    res.send('Profil pengguna: ' + nama);
});

app.post('/users', (req, res) => {
    res.send('Tambah data user baru');
});

app.put('/users/:id', (req, res) => {
    res.send('Update data user dengan ID: ' + req.params.id);
});

app.delete('/users/:id', (req, res) => {
    res.send('Hapus users dengan ID: ' + req.params.id);
});

app.listen(3000, () => console.log("Server berjalan di http://localhost:3000"))