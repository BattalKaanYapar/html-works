let arrayObj = [1,2,3]
let object1 = {obj:1}

console.log("arrayObj", typeof(arrayObj))
console.log("object1", typeof(object1));

let item1 = new Object()

let item2 = {}

console.log("item1",typeof(item1))
console.log("item2",typeof(item2));


//Object oluşturmak

let item3 = {}
let item4 = new Object();

console.log("object1",object1)

var numbers =[45,100,1,8,9,10];

    Show('result',numbers);
    Show('result2',MaxArray(numbers));

    // function sortArray() {
    //     numbers.sort(function(x,y) {
    //         return y-x;
    //     })
    // }
    // Show('result2',numbers[0]);
//}

function MaxArray(take) {
    return Math.max.apply(null,take);
}
function MinArray(take) {
    return Math.min.apply(null,take);
}
function Show(par,par2) {
    document.getElementById(par).innerHTML=par2;
}