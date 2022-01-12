var names = ['bmw','mercedes','tofas'];

console.log(names);

let muslera = ['percival','mystic','striker',42,false];

console.log(muslera);

muslera.push('BlackDesert')
console.log(muslera);
muslera.unshift('Choris')
console.log(muslera);
muslera.pop();
console.log(muslera);
muslera.reverse();
console.log(muslera);
muslera.shift();
console.log(muslera.indexOf('mystic'));
console.log(muslera.length);

var myArray = [4,7,5,2],toplam = 0, carpim = 1;

for (var i = 0; i < myArray.length; i++) {
    toplam += myArray[i];
    carpim *= myArray[i];
   
}
console.log("Toplam :"+ toplam + " Çarpım :" + carpim); 

// var gunler = new Array();
// gunler[0]="Pazartesi";
// gunler[1]="Salı";
// gunler[2]="Çarşamba";
// gunler[3]="Perşembe";
// gunler[4]="Cuma";
// gunler[5]="Cumartesi";
// gunler[6]="Pazar";

// document.write(gunler[1]);
// document.write("<br>");
// document.write(gunler[4]);
// document.write("<br>");
// document.write(gunler[5]);
// document.write("<br>");
// var sayilar = new Array();
// var i;

// for (i=0;i<10;i++){
//     sayilar[i] =prompt (i + 1 + ".Sayıyı Giriniz");
// }
// sayilar.sort();
// document.write("<br>")
// for (i=0;i<10;i++)
// {
//     document.write(i + 1 + ".Sayı:" + sayilar[i] + "<br>");
// }
// console.log(i)

var futbolcu=["Messi","Ronalda","Roberto","Pele"];

console.log(futbolcu);

var player = {
    name : 'Neymar',
    lastName : 'Santiago',
    age : 34,
    goal:40

}
console.log(player.name);
console.log(player.age);

var variable1 ='name';

console.log(player[variable1]);

player.age = 35;
player.goal = 41;
console.log(player);

player['goal'] = 48;
console.log(player);

var player3 = {
    name : 'Ricardo',
    lastName : 'Queresma',
    age : 33,
    childs : ['Alex','Sara','Pablo'],
    fullName :function(){
        return this.name + " " + this.lastName;
    }
};
console.log(player3.fullName());
