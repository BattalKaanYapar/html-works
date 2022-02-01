// var eleman = ["Kaan","Battal"];
var eleman = 5;
var goster = eleman.constructor;

// document.write(goster);

if(goster === Array){
    document.write("Bu Eleman Array")
}else if(goster !=Array){
    document.write("Bu Eleman Array Değildir")
}

var fruits = ["Banana","Orange","Apple","Mango"]

fruits.constructor;
document.write(" <br> Fruits = " + fruits.constructor)

var o = {};

o.constructor === Object;

document.write("<br> " + o);

var n = new Number(3);

n.constructor === Number;

document.write("<br>" + n);