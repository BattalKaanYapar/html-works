// ******Number********
// number veri turu tanimlamak:
let price = 100
let tax = 0.18
let pricetax = price * tax
let total = price + pricetax
console.log(
    "Fiyat:",pricetax,
    "KDV Orani:", tax,
    "KDV Tutari: ",price,
    "Fiyat:" ,total
    )

// arttirma ve azaltma islemleri:

let counter = 320
counter = counter + 1  //uzun yontem
counter += 1;
counter ++;
console.log(counter)

counter --;
counter -=1;
console.log(counter)

counter *=10;
console.log(counter)

counter /=2;
console.log(counter)

//islem onceligi.
console.log( 2 + 3 * 10) // 50 ===???
console.log( (2 + 3) * 10) // 50 ===???

//mod (kalan) alma %;
//sayi tek mi cift mi ??
console.log(14 % 2) // 0 ise cift sayi , 1 ise tek sayi yani kalanlı...
//8 urun alan koliye tum urunler sigiyor mu ?
console.log("Koli Kalan Urun Ornegi: ", 18 % 8)

// ust alma **:
console.log(2 * 2 * 2 * 2)
console.log(2 ** 4)


//asagi yuvalama islemi -> Math.floor:
console.log("Asagi Yuvarlama:", Math.floor(1.9) ) // ->1

//yukari yuvarlama islemi -> Math.ceil:
console.log("Yukari Yuvarlama:",Math.ceil(1.9) ) // ->2

// yakina yuvarlama islemi -> Math.round:
console.log("Yakina Yuvarlama:",Math.round(1.9) ) // ->2
console.log("Yakina Yuvarlama:",Math.round(1.2) ) // ->1
