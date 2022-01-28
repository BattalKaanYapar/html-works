var erkekler =["kaan","fahreddin","oğuzhan"]
var kizlar =["hanife","havva","zehra"]
var arabalar =["Mercedes","Bmw","Tofaş"]
var ulkeler = ["Turkiye","Almanya","Ukrayna"]

var topla =erkekler.concat(kizlar + "<br>");
topla = erkekler.concat(kizlar,arabalar,ulkeler + "<br>")
document.write(topla + "<br>"); 
document.write(topla[0]);
console.log(topla);


var hege = ["Clearia","Lone"]

var stale = ["Emile","Thomas","Linus"];

var children = hege.concat(stale);

console.log(children)

var alpha = ['a','b','c'],
    numeric = [1,2,3];

var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric);

