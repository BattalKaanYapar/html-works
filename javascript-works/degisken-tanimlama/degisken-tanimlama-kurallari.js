// ### Degisken  Genel Tanimlama Kurallari
//camelCase Kullanimi
let fullname = "" // bu dogru kullanim  degil :/
let logsignilekodluyoruz = "" // bu dogru kullanim  degil :/
let logsign_ile_kodluyoruz = "" // bu dogru kulanim  degil :/
let fullName = "" // dogru kullanimdir.
let logsignIleKodluyoruz = "" // dogru kullanimdir.
let logsignILEKodluyoruz = "" // bu dogru kullanim  degil :/ cunku buyuk ve kucuk kurallarına dikkat ediliyor.

//let firstName = "Battal Kaan", lastName = "Yapar" kod okunurlugu tarafindan google onermiyor
let firstName = "Battal Kaan"
let lastName = "Yapar"
console.log(firstName, lastName)


//UPPER_CASE Kullanimi:
const password = "1234" //  bu dogru kulanim  degil :/
const PASSOWRD = "1234" // dogru kullanim.
const SERVER_PASSWORD = "1234" // dogru kullanim.

//degiskenlerde turkce ve diger dillerin kullanimi:
let türkçeBilgi = "Türkçe Bilgi Yazdırılıyor.." // bu dogru kullanim degildir.
console.log(türkçeBilgi)

// anlamsiz degisken adlari kullanilmayacak.!!!
let x = 1; // bu dogru kullanim  degil :/ :)
// x, y, z, i, e, k gibi anlamsiz degisken isimlerini kullanmayacagim..

// ### Ek Bilgiler (Sonradan islenecek konular)
// 1: boolean tanimlarken is/has kullanimi
let isActive = true
let hasPassword = false
// 2: Line Length < 80 (herkesin okuyacabilecegi sekilde kodlamak)
// eski laptoplar 80 satir uzunlugunda oldugu icin burada sinirlendirilmis.
