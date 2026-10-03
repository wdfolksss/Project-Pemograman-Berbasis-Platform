const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nama Mahasiswa: " , function(nama){    
    rl.question("Masukkan Nilai Tugas: ", function(nilaitugas){
        nilaitugas = parseFloat(nilaitugas.replace(',', '.'));

        rl.question("Masukkan Nilai UTS: ", function(nilaiuts){
            nilaiuts = parseFloat(nilaiuts.replace(',', '.'));

            rl.question("Masukkan Nilai UAS: ", function(nilaiuas){
                nilaiuas = parseFloat(nilaiuas.replace(',', '.'));

                const bobotTugas = 0.30;
                const bobotuts = 0.30;
                const bobotuas = 0.40;
                 if (isNaN(nilaitugas) || isNaN(nilaiuts) || isNaN(nilaiuas)){
                    // console.log("Pastikan nilai yang dimasukukkan adalah angka");
                 }else{
                    const nilaiAkhir = (nilaitugas * bobotTugas)+ (nilaiuts * bobotuts) + (nilaiuas * bobotuas);
                    
                    console.log("Nama Mahasiswa :", nama);
                    console.log("Nilai Tugas    :", nilaitugas);
                    console.log("Nilai UTS      :", nilaiuts);
                    console.log("Nilai UAS      :", nilaiuas);
                    console.log("Nilai Akhir    :", nilaiAkhir.toFixed(2));
                 }
                 rl.close();
            });
        });
    });
});


