var tarih = new Date();
document.write("tam tarih = " + tarih + "<br>");

let yil = tarih.getFullYear();
document.write(" yıl : " + yil + "<br>");

let ay = tarih.getMonth();
document.write("Ay : " + (ay + 1) + "<br>");

let ayGunu = tarih.getDate();
document.write("Ay Günü : " + ayGunu + "<br>");

let haftaGun = tarih.getDay();
document.write("Hafta Günü : " + haftaGun + "<br>");

let saat = tarih.getHours();
document.write("Saat : " + saat + "<br>");

let dakika = tarih.getMinutes();
document.write("Dakika : " + dakika + "<br>");

let saniye = tarih.getSeconds();
document.write("Saniye : " + saniye + "<br>");

let month = [
  "ocak",
  "şubat",
  "mart",
  "nisan",
  "mayıs",
  "haziran",
  "temmuz",
  "ağustos",
  "eylül",
  "ekim",
  "kasım",
  "aralık",
];

var day = [
  "pazar",
  "pazartesi",
  "salı",
  "çarşamba",
  "perşembe",
  "cuma",
  "cumartesi",
];

var date1= new Date();

var monthName = date1.getMonth();
var daysName = date1.getDate();

document.write(month[monthName]+"<br>");
document.write(day[daysName]+"<br>");

