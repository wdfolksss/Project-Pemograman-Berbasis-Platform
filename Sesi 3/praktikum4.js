const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka: ", function(angka){

    let hasil = 1;
    for (let i = 1; i <= angka; i++) {
        hasil = hasil * i;
    }

    console.log("Faktorial", angka, "=", hasil);

    rl.close();
});