let list = ["apple",142,"banana",15,"book",13]

document.write(list + "<br><br>");

var number;

var key = list.keys();

for (number of key){
    document.write(number + "<br><br>");
}

list[0] = "Karpuz";

document.write(list + "<br><br>");


list [3] = "28"

document.write(list + "<br><br>");


list[4] +=" : Lord Of The Rings";

document.write(list +  "<br><br>")

var fruits = ["Banana","Orange","Apple","Mango"]

var x = fruits.keys();

document.getElementById("demo").innerHTML = x.next().value;


var arr = ['a','b','c']

var sparseKeys = Object.keys(arr);

var denseKeys = [...arr.keys()]

console.log(sparseKeys);
console.log(denseKeys);

var a = ['pisagor','barışManço','csgo','lol'," "];

var it = a.keys();

for(let key of it){
    document.write(key + ' ')
    console.log(" Dizimin index numarası = " + key + " Dizimin içeriği = " + a)
}

