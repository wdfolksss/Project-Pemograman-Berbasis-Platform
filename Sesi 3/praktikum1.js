const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Nilai: ", function(nilai){
    nilai = parseInt(nilai);
    if(isNaN(nilai)){
        console.log("Inputan harus berupa angka");
    }
    else{
         if(nilai >= 85){
            grade = "A";
        }
        else if(nilai >= 70){
            grade = "B"
        }
        else if (nilai >= 55){
            grade = "C"
        }
        else if (nilai >= 40){
            grade = "D"
        }
        else{
            grade = "E"
        }

        console.log("Grade Anda :", grade);
    }
    
    rl.close();
})
