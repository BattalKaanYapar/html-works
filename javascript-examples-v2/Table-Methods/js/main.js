let employess=["Kaan","Hasan","Berkay","Oğuzhan","Yaren"]

console.log(employess)

let oneTable =document.getElementById('oneTable')

console.log(oneTable)

let gonderDOM =document.getElementById('gonder')



for(var i=0;i<employess.length;i++){
    console.log(employess[i])
}

let employess2=["Hanife","Havva","Mahi","Dudu"]

let toplam=employess.concat(employess2);

console.log(toplam);

toplam.reverse();
console.log(toplam);

console.log(toplam.join());


