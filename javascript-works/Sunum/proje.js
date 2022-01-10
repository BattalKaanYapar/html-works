let price = 100;
let tax = 0.1;
let priceTax = price * tax;
let total = price + priceTax;
console.log(
  "Fiyat : " + price,
  "KDV :" + tax,
  "KDV Tutari :" + priceTax,
  "Toplam Fiyatı : " + total
);
let counter = 0;

counter ++;
counter --;
counter ++;
counter *=10;
console.log(counter)

function merhaba(name, age) {
    console.log(` İsim ${name} Yaş:${age}`);
  }
  
  if (typeof name === "undefined") name = "Bilgi Yok";
  if (typeof age === "undefined") age = "Bilgi Yok"; // undifend olursa yazdırılacak bilgi.
  console.log(` İsim ${name} Yaş:${age}`);
