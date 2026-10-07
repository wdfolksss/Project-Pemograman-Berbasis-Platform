const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
let total = 0;
 
function mulai() {
  console.log("\nPilih olahraga:");
  console.log("1. Lari");
  console.log("2. Push-up");
  console.log("3. Plank");
 
  rl.question("Pilihan (1-3): ", function (pilih) {
    rl.question("Berapa menit?: ", function (jawab) {
      let menit = Number(jawab);
 
      switch (pilih) {
        case "1":
          total += menit * 60 / 5;   // 60 kalori per 5 menit
          break;
        case "2":
          total += menit * 200 / 30; // 200 kalori per 30 menit
          break;
        case "3":
          total += menit * 5;        // 5 kalori per 1 menit
          break;
        default:
          console.log("Pilihan tidak ada");
      }
 
      rl.question("Mau olahraga lagi? (y/n): ", function (lagi) {
        if (lagi === "y") {
          mulai();
        } else {
          console.log("Total kalori terbakar: " + total + " kalori");
          rl.close();
        }
      });
    });
  });
}
 
mulai();