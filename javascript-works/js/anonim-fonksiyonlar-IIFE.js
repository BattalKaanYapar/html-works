//Fonksiyon Tanımlama
// İkinci Örnek /  Varsayılan Değerlerimiz.
//function merhaba(name = "Bilgi Yok",age = "Bilgi Yok"){
//    console.log(`İsim:${name} Yaş:${age}`);
//}

//merhaba("Kaan");
// İkinci Örnek / 
//İlk Örnek
//function merhaba(name,age){
//    console.log(` İsim ${name} Yaş:${age}`);
//}

//if(typeof name === "undefined") name = "Bilgi Yok";
//    if(typeof age === "undefined") age = "Bilgi Yok"; // undifend olursa yazdırılacak bilgi.
//    console.log(` İsim ${name} Yaş:${age}`);
//merhaba ("Kaan",25);// Fonksiyon Çağrısı (Function Call)
//merhaba("Zehra",19);// Fonksiyonlara gönderdiğimiz parametreler olarak biliniyor.
//merhaba(); // Fonksiyon Çağrısı (Function Call)
//merhaba()
//merhaba()
//merhaba()

//merhaba(); // İsim Undifend Yaş Undifend
//İlk Örnek



//Square ***Return Uygulamarı ***
//function square(x) {
//   return x*x;  //Önceden olan kod NaN çıktısı console.log(x*x);
//}
//function cube (x) {
//   return x*x*x; //Önceden olan kod NaN çıktısı console.log(x*x*x);
//}
//let a = square(12);

//a = cube(a); //NaN / Not A Number hatası 

//console.log(a); // 144 'ün küp 'ü

//function square(x){
//    return x * x;
//    console.log("What's Up man"); //hiç bir zaman çalıştırılmaz.
//}
//function cube(x){
//    return x*x*x;
//}
//let a = cube(square(12));

//console.log(a);

//Java script te direkt yazdırılabiliyor.
//function merhaba(){
//    return "Merhaba";
//}
//console.log(merhaba());

// bir değişkene bir fonksiyonu eklemiş veya atamış olduk sıkça kullanılır.
//const merhaba = function(name){
//    console.log("Merhaba" + name); // fonksiyon objesi  
//};
//merhaba("Murat") // olarak kullanılabilir.

//Immediately Invoked Function Expression (IIFE)
//** TANIMLANDIĞI YERDE ÇALIŞAN FONKSİYONLAR ANLAMINA GELİYOR.(IIFE) **/
//IIFE ÖRNEĞİ
//(function(name){
//    console.log("Merhaba: " + name);
//})("Kaan");