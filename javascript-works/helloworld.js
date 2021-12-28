alert('Hello world!')

//var ile degisken tanimlanmak:
/*
var serverName = "https://www.logsign.com/"
console.log(serverName)
*/
//let  ile degiskeni bos tanimlamak
let serverName;
console.log(serverName)

//let ile degiskene bilgi atamak:
serverName = "https://www.logsign.com/"
console.log(serverName)

//let ile degiskene bilgi atayarak tanimlamak:
let password = "1234";
console.log(password)

//degisken atamasi yapmadan once kullanmaya calismak:
var fullName = "Battal Kaan Yapar";
console.log(fullName)  //* eger sirasi farklı olursa (undefined) hatasi aliriz.

//let ile tanimlanan degiskenin icindeki bilgiyi degistirmek
fullName = "Lorem Ipsum Dolar"
console.log(fullName)

//birlestirme veya eleme islemi 
fullName + "Yeni Eklenen Bilgi" 
console.log(fullName + " Test Bilgisi")

fullName = fullName + " Yeni Bilgi"
fullName = "2: Bilgi : " + fullName

fullName = "Sifirlandi"
fullName += " ve Yeni Bilgi Eklendi"

//const ile degiskeni bos tanimlamaya calismak :( :
//const serverPassword; // sadece degisken tanimlandi ama ici bos.

//const ile degisken tanimlamak:
const serverPassword = "skdhjfksdjfds"
console.log(serverPassword)
//serverPassword = "1234" const değişkeni asla değişmez bunun yerine let kullanılmalıdır.
//console.log(serverPassword)
