//********Fonksiyonlara parametreler atanmak ve fonksiyonu geri dönüşüme almak

//Temel Kurallar:
//1:Bir Fonksiyonun bir veya birden fazlaparametre alabilir veya hiç almayabilir.
//2:Bir fonksiyonun disari bilgi dönderebilir(return) veya göndermeyebilir
//3:Mümkünse fonksiyonun bağımlılıklarınıu azaltmak gerekir.

let firstName = "Lorem"

function greetings(firstName="", lastName=""){
    //default parametre alıyor.
    //console.log(`Merhaba ${firstName} ${lastName}`)
}

console.log(firstName)//değişken
greetings()//fonksiyona parametre gondermedik ==
greetings("Parametre")

function greetings2(firstName, lastName){
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("Ad", "Soyad")
//let info = "deneme" // ???
console.log(greetingsInfo)

function domIdWriteInfo(id, info){
    let domObject = document.querySelector(`#${id}`) // id alabilmek için
    domObject.innerHTML = id

let htmlInfo = `<span style="color:red;">Color ReDDDDD</span>`
domIdWriteInfo('header',htmlInfo) //html içindeki id'si list olanı al

domIdWriteInfo('greeting',htmlInfo)
domIdWriteInfo('battal-link',greetings2("Lorem", "Ipsum"))

}