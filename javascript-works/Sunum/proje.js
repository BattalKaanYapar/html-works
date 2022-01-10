
let users = ["Kaan","Hasan","Oğuzhan","Muro","Deniz","Onur","Didem"]
var numbers = 20;
let tanimsiz;
let degersiz = null;

users.pop(); 
users.push("Ecem " + "<br>");
users.reverse();
users.sort();
users.unshift("İki Deli" , "<br>");
console.log(users.length)
console.log(users);
document.write(users)

document.write(numbers);
console.log(degersiz);
console.log(tanimsiz);
console.log(numbers -=5);
console.log(numbers +=5 )
console.log(numbers * 5 )
console.log(numbers % 3)
console.log(numbers /2)
console.log(++numbers)
console.log(--numbers)
if(numbers == users){
  console.log("Doğru")
}
else{
 console.log("Yanlış")
}
