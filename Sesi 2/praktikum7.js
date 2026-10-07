const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nama Mahasiswa: " , function(nama){    
    rl.question("Masukkan Nilai Tugas: ", function(nilaitugas){
        rl.question("Masukkan Nilai UTS: ", function(nilaiuts){
            rl.question("Masukkan Nilai UAS: ", function(nilaiuas){

                nilaitugas = parseFloat(nilaitugas);
                nilaiuts = parseFloat(nilaiuts);
                nilaiuas = parseFloat(nilaiuas);

                const nilaiAkhir = (nilaitugas * 0.30)+ (nilaiuts * 0.30) + (nilaiuas * 0.40);
                
                    let grade;
                    if (nilaiAkhir >= 85){
                        grade = "A";
                    }
                    else if(nilaiAkhir >= 70){
                        grade = "B"
                    }
                    else if (nilaiAkhir >= 60){
                        grade = "C"
                    }
                    else if (nilaiAkhir >= 50){
                        grade = "D"
                    }
                    else{
                        grade = "E"
                    }

                    console.log("===================================");
                    console.log("Nama Mahasiswa :", nama);
                    console.log("Nilai Tugas    :", nilaitugas);
                    console.log("Nilai UTS      :", nilaiuts);
                    console.log("Nilai UAS      :", nilaiuas);
                    console.log("Nilai Akhir    :", nilaiAkhir.toFixed(2));
                    console.log("Grade          :", grade);

                 rl.close();
            });
        });
    });
});
