// let setting = {
//     userName: "loremIpsun",
//     password: "BadPassword",
//     isActive: false,
//     ip: "126.0.0.1",
//     serverName: "kodluyoruz.org"
// }

//obje içindeki bilgilerin tek seferde çıkarılması
// let userName = settings.userName
// console.log(userName)

//let {userName:user, password, isActive, ip:serverIP, serverName} = setting

//console.log(user,password, isActive, serverIP, serverName)
//console.log(setting)
//console.log(user)

//obje içindei bazi bilgilerin çıkarılması
//let {userName:userName2, password:password2, isActive:isActive2, ...newSettings} = setting
//eğer değişken ismi daha önce tanımlanmadıysa:
//let {userName, password, isActive, ...newSettings} = settings

//console.log(userName2, password2,isActive2,newSettings);

//objenin destructuring ile kopyalanması

//HATALI!!!
//let setting2= setting
//setting2.userName = "Değişen Bilgi"
//console.log("setting", setting)
//console.log("setting2",setting2)

//Doğrusu :)
// let setting2 = {...setting}
// setting2.userName = "Değişen Bilgi"
// console.log("setting", setting)
// console.log("setting2",setting2)

// let score = [100,200,300,400]

// let [score1, score2, ...otherScore] = score
// console.log(score1, score2, otherScore)