const PRODUCTS = ["Laptop","Phone","Speaker","Desktop-PC","Server","Mouse","Keyboard"]

//PRODUCTS.forEach((product, index, array) => console.log(array[index] + "11"))
//PRODUCTS.forEach((product, index, array) =>array[index] = product + " 11")
PRODUCTS.forEach((product, index, array) =>array[index] = `${product.toUpperCase()}`)
//her birini büyük harf ile yazdır = toUpperCase

console.log(PRODUCTS)

const userListDOM = document.querySelector("#userList");


PRODUCTS.forEach( item => {
    const liDOM =document.createElement('li')
    liDOM.innetHTML = item
    userListDOM.append(liDOM)
})

var numbers = [1,2,3,4,5];
let index = 0;
var sum = 0;

for (index;index<numbers;index++){
    sum += numbers[index];
}
console.log(sum);

var numbers = [1, 2, 3, 4, 5];

var sum = 0;

numbers.forEach(function(number) {
  sum += number;
});

console.log(sum);

var numbers = [1, 2, 3, 4, 5];

var sum = 0;

function addNumbers(number) {
  sum += number;
}

numbers.forEach(addNumbers);

console.log(sum);

var heda = [ 'a','b','c','d','e'];

heda.forEach(function(neresi){
    console.log(neresi);
});

let heda2 = ["a","b","c","d","e","f"]

heda2.forEach(function(elem,index){
    console.log(`${index}/${elem}`);
    
})
var x = document.querySelectorAll('li');
 [].forEach.call(x , function(el,i) {
       el.onclick=function(){
           el.style.color="blue";
          
    }
});

let fruits = ["Elma","Armut","Karpuz","Kavun"]

console.log(fruits);
console.log(fruits.length)
console.log(fruits.push("Kaan"))
console.log(fruits);

fruits.forEach(function(ici){
    console.log(ici)
})
