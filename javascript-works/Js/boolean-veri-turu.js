// #### Boolean Veri Türü İle Çalışmak ####

// 0 ve 1'i anlamak -->
let isActive = false
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(userName) // undefined gözüküyor değişken atamadığımız için..
console.log(isUserName) // false gözüküyor 

Boolean(22) // true
Boolean(0) // false
Boolean(-1) // true

userName = "user"
console.log("User Name:", Boolean(userName)) // bir değer atandığı için true gözüküyor.

// 0 , -0, null, false, NaN, undefined, ("") ->


Boolean(22) // true
Boolean(0) // false
Boolean(-1) // true
Boolean(0 === 0) // true hakkında konuşmadı örnek olarak gösterildi ileride anlatılacak
// Not: Karar yapilar kısmında tekrar anlatılacak.
Boolean(userName.length > 0) 







