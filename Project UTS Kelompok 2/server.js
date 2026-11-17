const express = require('express');
const app = express();
const data = require('./data');

app.use(express.json());

// GET - Menampilkan halaman utama
app.get('/data', (req, res) => {
    let totalTiket = 0;

    for (let i = 0; i < data.length; i++) {
        totalTiket += data[i].stok;
    }

    res.send(`
            <h2>Selamat Datang di Projek Kelompok 2</h2>
            <h3>Aplikasi Pengelolaan Tiket Konser</h3>
            <h3>Identitas Anggota Kelompok</h3>
            <ul>
                <li>Nama: Warda Amalia - 20250040003</li>
                <li>Nama: Zakka Tamma. K.R - 20250040077</li>
                <li>Nama: Nazwa Dwianti - 20250040035</li>
                <li>Nama: M. Fallah - 20250040047</li>
            </ul>
        `);
    });

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

// GET - Menampilkan tiket berdasarkan ID
app.get('/tiket/:id', (req, res) => {
    const id = Number(req.params.id);

    const tiket = data.find(tiket => tiket.id === id);

    if (tiket) {
        res.json(tiket);
    } else {
        res.send("Tiket tidak ditemukan");
    }
});

// POST - Menambahkan tiket berdasarkan Nama Artis
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

// DELETE - Menghapus tiket berdasarkan ID
app.delete('/tiket/:id', (req, res) => {
    res.send(`Tiket dengan ID ${req.params.id} telah dihapus`);
});

app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});