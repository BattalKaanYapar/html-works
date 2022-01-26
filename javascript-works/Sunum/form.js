//var tuttugumSayi = 28;
// var kullanici = prompt(
//   "Aklımdan 1'den 100'e kadar hangi sayıyı tutuyorum, bil bakalım.",
//   " "
// );
// if (tuttugumSayi == kullanici) {
//   alert("Tebrikler doğru tahmin");
// } else if (tuttugumSayi > kullanici) {
//   alert("Üzgünüm. Tuttuğum sayı sizin sayınızdan daha büyüktü.");
// } else if (tuttugumSayi < kullanici) {
//   alert("Üzgünüm. Tuttuğum sayı sizin sayınızdan daha küçüktü.");
// } else {
//   alert("Üzgünüm. Tuttuğum sayı değil :/");
// }
// var tuttugumSayi = 28;
// var kullaniciSayisi = document.getElementById("#kullaniciSayisi");


// var btnCevap = document.getElementById("uygula");
// btnCevap.onclick = function () {
  
//  if (kullaniciSayisi == tuttugumSayi){
//      alert("Doğru tahmin")
//  }else{
//      alert("yanlış")
//  }
// };

var tuttugumSayi =28
//var kullanici = prompt("1'den 100'e kadar bir sayı tuttum,sence kaçtır?")

//if (kullanici == tuttugumSayi){
//    alert("Tebrikler Doğru Tahmin")
//}else if (kullanici < tuttugumSayi){
//    alert("Girdiğiniz sayı, tuttuğum sayıdan daha küçüktü")
//}else if (kullanici > tuttugumSayi){
//    alert("Girdiğiniz sayı, tuttuğum sayıdan daha büyüktü")
    
//}
// let userFormDOM = document.querySelector("#userForm");
// userFormDOM.addEventListener("submit", formHandler);

function formHandler(){
    var girilenDeger =document.querySelector("#userValue");
    if (girilenDeger.value > tuttugumSayi){
        alert("Girilen Değer tutulan sayıdan büyüktür.")
    }else if(girilenDeger.value < tuttugumSayi){
        alert("Girilen Değer tutulan sayıdan küçüktür")
    }else{
        alert("Doğru tahmin")
    }

    console.log(girilenDeger.value)
}

// function gonder(){
//     console.log("hde"); //fonksiyon çağırmak
//     formHandler()
// }
