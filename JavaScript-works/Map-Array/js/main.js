const numbers = [2,3,4,5,10]

const newArray = numbers.map(bok => {
    return bok * 2
})

console.log(numbers);
console.log(newArray);

const maaslar=[1100,13000,2500,4500,25000,2000]

const yeniMaaslar = maaslar.map((event)=>{
    if(event >3000)
    return event * 1.15;
    else
    return event * 1.25;
})
//yeniMaaslar =[1327,14230,2100];


console.log(yeniMaaslar);


//Kullanım Şekli //array.map( function(value, index, arr), this)//


var sayilar = [2,4,5,6,7,8,9];

var yeniSayliar = sayilar.map(function(value,index){
    if(index % 2 == 0){
        return Math.pow(value,2);

    }else{
        return Math.pow(value,3);
    }
})
// yeniSayliar = [0,1,25,216,49,512]

console.log(yeniSayliar.toString());


yeniSayliar= "0","1","25","216","49","512","13000"

var meyve = "elma, armut, portakal";
var deneme1= meyve.slice();//parametre girilmezse hepsini kopyalar
let armut = meyve.slice(6,11)
console.log(armut);
console.log(deneme1);

