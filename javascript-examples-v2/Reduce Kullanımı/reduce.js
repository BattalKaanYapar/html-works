var mat = [10,20];
document.write("liste = " + mat + "<br><br>")

function islem (sayi1 , sayi2){
    return sayi1 + sayi2;
}

var ilkDeger = 100;

var sonuc = mat.reduce(islem,ilkDeger);

document.write(" sonuc = " + sonuc +  "<br><b")

var numbers = [15.5,2.3,1.1,4.7]

function getSum(total,num){
    return total + Math.round(numbers)
}
function myFunction(item){
    document.getElementById("demo").innerHTML = numbers.reduce(getSum,0);
}

const array1 =[1,2,3,4]

const reducer = (accumulator,currentValue) => accumulator + currentValue;
document.write("<br><br>"+array1.reduce(reducer))
console.log(array1.reduce(reducer));
document.write("<br><br>"+array1.reduce(reducer,5))
console.log(array1.reduce(reducer,5));


