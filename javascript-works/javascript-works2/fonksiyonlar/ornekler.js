function y (p,a,fc){
    var x = p * a ;
    return fc(x);
}
function sum11(param1){
    return param1 + 10;
}
var yol = y (6,2,sum11);
console.log(yol);

var yol2 = y (8,42,sum11);
console.log(yol2)