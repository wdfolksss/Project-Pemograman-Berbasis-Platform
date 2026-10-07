const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Kalimat: ", function(kalimat) {
    let kalimatLower = kalimat.toLowerCase();
    let kalimatReverse = kalimatLower.split("").reverse().join("");
    let palindrom = true;

    console.log("Hasil pembalikan:", kalimatReverse);

    for (let i = 0; i < kalimatLower.length; i++) {
        if (kalimatLower[i] !== kalimatReverse[i]) {
            palindrom = false;
            break;
        }
    }

    if (palindrom){
        console.log("kalimat tersebut adalah palindrom");
    } else {
        console.log("kalimat tersebut bukan palindrom")
    }

    rl.close();
});