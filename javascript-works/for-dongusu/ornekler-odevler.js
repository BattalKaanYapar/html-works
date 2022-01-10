/**For Döngüsü Örnekleri **/
// for (var i = 10; i>=0; i--){
//     console.log(i);
// };
// /*Ödev Çift sayıları yazdır. */
// for (var i = 20; i<=50; i++){
//     console.log(i);
// }
// for (var i = 0; i < 50; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     };
// };
// /*Ödev tek sayıları yazdır */
// for (var i = 0; i < 50; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
//     };
// };
// var tuttugumSayi = 9;
// var kullanici = prompt(
//   "Aklımdan 1'den 10'a kadar hangi sayıyı tutuyorum, bil bakalım.",
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

/**For Döngüsü Örnekleri **/
/**While Döngüsü Örnekleri**/
// let cars = ['bmw','mercedes','ferrari','lamborgini','dodge']
// while(cars <= cars.length){
//     console.log(cars);
// }
// console.log(cars);
// cars.reverse();
// console.log(cars);
// cars.unshift('Bugatti');
// console.log(cars);
// cars.push('Vosvos')
// console.log(cars);
// cars [2] = 'Muscle';
// console.log(cars);
/**While Döngüsü Örnekleri**/
/** forEach Örnekleri **/

/* const numbers = [4, 11, 9];
const newArray = [];

numbers.forEach(function(numbers){
  newArray.push(numbers*3);
});
console.log(newArray);

const animals = ["cat" , "dog" , "bird", "horse"];
  
animals.forEach((value , index , array) => {
  console.log('value: ', value );
  console.log('value parametresinin aldığı index :', index );
  console.log('array:' , array );
});
*/
/** forEach Örnekleri **/
/** Array-Filter Örnekleri **/
// var sayilar = [64, 36, 100, 25, 256];

// var yeniDizi = sayilar.filter(myExamples);

// function myExamples(value) {
//   return value > 50;
// }

// console.log("sayilar dizisi : " + sayilar);

// console.log("Yeni Dizi : " + yeniDizi);
//Yaşı 40 altında olanları bulalım
// var yas = ["yas40", "yas24", "yas56", "yas12", "yas65"];

// var kucukler = yas.filter(myFunction);

// function myFunction(value) {
//   return value < "yas40";
// }
// console.log("Yaşları büyük olanlar : " + yas);
// console.log("Yaşları küçük olanlar :" + kucukler);

// function myFunction(value) {
//   return value > "yas40";
// }
// console.log("Yaşları büyük olanlar : " + kucukler);

/** Array Filter Örnekleri **/
/**Switch - Break Örnekler **/

 var kullaniciSayisi = prompt(
   "Aklımdan 1'den 10'a kadar hangi sayıyı tutuyorum, bil bakalım.",
   ""
 );
 switch (kullaniciSayisi) {
   case "1":
     alert("Üzgünüm tuttuğum sayı daha büyüktü.");
     break;
   case "2":
     alert("Üzgünüm tuttuğum sayı daha büyüktü.");
     break;
   case "3":
     alert("Üzgünüm tuttuğum sayı daha büyüktü.");
     break;
   case "4":
     alert("Üzgünüm tuttuğum sayı daha büyüktü.");
     break;
   case "5":
    alert("Üzgünüm tuttuğum sayı daha büyüktü.");
    break;
   case "6":
     alert("Üzgünüm tuttuğum sayı daha büyüktü.");
     break;
   case "7":
     alert("Tebrikler, doğru tahmin!");
    break;
   case "8":
     alert("Üzgünüm tuttuğum sayı daha küçüktü.");
     break;
  case "9":
     alert("Üzgünüm tuttuğum sayı daha küçüktü.");
     break;
   default:
     alert("1'den 10'a kadar bir sayı girmeliydiniz.");
 }
 console.log(kullaniciSayisi)

/**Switch - Break Örnekler **/
