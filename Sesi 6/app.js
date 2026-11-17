const express = require('express');
const app  = express();

const siswa = {
    nama: 'Warda', 
    kampus: 'Universitas Nusa Putra', 
    Matkul: 'PBP'
}
const harga = {
    Produk: 'Ulta Milk', 
    Harga: 5000, 
}

app.get('/', (req, res) =>{
    res.end('Hello Express!');
});

app.get('/data', (req, res) =>{
    // res.json({ nama: 'Mahasiswa', kampus: 'Universitas Nusa Putra', Matkul: 'PBP'});
    res.json(siswa);
});
app.get('/harga', (req, res) =>{
    res.json(harga);
});

app.listen(8000, () => console.log('Server Express berjalan di http://localhost:8000'));
