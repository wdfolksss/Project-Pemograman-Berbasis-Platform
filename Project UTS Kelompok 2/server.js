const express = require('express');
const app = express();
const data = require('./data');

app.use(express.json());

// GET - Menampilkan semua tiket
app.get('/tiket', (req, res) => {
    let totalTiket = 0;

    for (let i = 0; i < data.length; i++) {
        totalTiket += data[i].stok;
    }

    res.json({
        jumlahKonser: data.length,
        totalTiket: totalTiket,
        data: data
    });
});

// POST - Menambahkan tiket
app.post('/tiket/:artis', (req, res) => {
    const artis = req.params.artis;
    res.send("Tiket konser " + artis + " berhasil ditambahkan");
});

// GET - Mencari tiket berdasarkan nama artis
app.get('/tiket/cari/:nama', (req, res) => {
    const nama = req.params.nama;
    let ditemukan = false;

    for (let i = 0; i < data.length; i++) {
        if (data[i].artis.toLowerCase() === nama.toLowerCase()) {
            ditemukan = true;
            res.send("Tiket konser " + nama + " ditemukan");
            break;
        }
    }

    if (ditemukan === false) {
        res.send("Tiket konser " + nama + " tidak ditemukan");
    }
});

// PUT - Mengubah data tiket
app.put('/tiket/:id/:artis/', (req, res) => {
    const id = req.params.id;
    const artis = req.params.artis;

    res.send(`Artis dengan ID ${id} telah diperbarui dengan artis ${artis}`);
});

// DELETE 
app.delete('/tiket/:id', (req, res) => {
    res.send(`Tiket dengan id ${req.params.id} telah dihapus`);
});

app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});