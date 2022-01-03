//Fonksiyon Tanımlama
// İkinci Örnek /  Varsayılan Değerlerimiz.
function merhaba(name = "Bilgi Yok",age = "Bilgi Yok"){
    console.log(`İsim:${name} Yaş:${age}`);
}

merhaba("Kaan");
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