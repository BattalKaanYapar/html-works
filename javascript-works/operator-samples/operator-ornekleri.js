
console.log(2 == 2);
console.log("js == java");

console.log(2 == "2");
console.log(2 === "2");

console.log(4 > 2);
console.log(2 < 4);

console.log(2 != 2);

console.log(2 >= 4);
console.log(4 <= 2);

//Mantıksal Bağlaçlar

//Not Operatörü

console.log((2 == 2)); //true
console.log(!(2 == 2)); // false

// And Operatörü  ? herşeyin true değerine sahip olması lazım

console.log((2 == 2) && ("Kaan" == "Kaan"));

// Or Oparatörü ? En az 1 işlemin true olması gerekmelidir.
// O yüzden genel sunucumuz true.

console.log((4 == 2) || ("Kaan" == "Kaan"));

//if (kosul){
//    if block

//}

const error = false;

if (error == true){
    console.log("Hata Oluştu"); //console.log(error);
}
else {
    console.log("Hata Oluşmadı");
}

const user = "ttt"; //mmc

if(user === "mmc"){
    console.log("Kullanıcı bulundu");

}
else{
    console.log("Kullanıcı Bulunmadı..");
}

const process = "5"; //1 2 3 4 var 5 olmadığı için else işlemi çalıştı..

if (process === "1"){
    console.log("İşlem 1");
}
else if (process === "2"){
    console.log("İşlem 2");
}
else if (process === "3"){
    console.log("İşlem 3");
}
else if (process === "4"){
    console.log("İşlem 4");
}
else{
    console.log("Geçersiz İşlem");
}