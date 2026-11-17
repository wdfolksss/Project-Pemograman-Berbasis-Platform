// const http = require('http');

// const server = http.createServer((req, res)=> {
//     res.writeHead(200, {'Content-Type' : 'text/plain'});
//     res.end("Selamat datang di server Node.js");
// });

// server.listen(8000, () => {
//     console.log('Server berjalan di http://localhost:8000 ');
// });


// Menampilkan data dalam bentuk JSON
const http = require('http');

const server = http.createServer((req, res)=> {
    const data = {
        nama: "Mahasiswa",
        matkul: "Pemograman Berbasis Platform",
        server: " Node.js"
    };
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.end(JSON.stringify(data));
});

server.listen(8000, () => console.log('Server JSON berjalan di http://localhost:8000'));

