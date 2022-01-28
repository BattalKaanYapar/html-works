var meyveler =["erik","kiraz","karpuz","kayısı","şeftali","mango"]

document.write(meyveler + " <br> <br>")

let goster = meyveler.entries();

var i ;

for(i of goster){
    document.write(i + " <br>")
}


meyveler.push('real');

console.log(meyveler)

meyveler.pop()

console.log(meyveler)

