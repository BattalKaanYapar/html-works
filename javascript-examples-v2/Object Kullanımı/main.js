var sahibi = "benim";
var renk = "sari";
var yas = 4;
var marka = "opel";

var goster;
var araba = {
  sahibi: "benim",
  renk: "sarı",
  yas: 4,
  marka: "opel",
  ac: function () {
    //   document.write("satildi.. <br><br>")
    document.write(this.marka+ "  " + renk + "<br><br>")

    goster=this.marka;
    document.write(goster);
  },
};

araba.ac(); // fonksiyon olduğunu belirtmek "()"  zorundayız.

document.write(araba.renk + "<br><br>");
document.write(araba.yas + "<br><br>");
document.write(araba.marka + "<br><br>");

document.write(araba["marka"])

var list ;

for (list in araba){
    document.write(list + "<br>")
}

var human={name:"Kaan",surName:"Yapar",yas:25};

document.write("<br>" + human.name);

var human2=human;

document.write(human2.surName);

human2.boy=190;

document.write("<br>"+"boy :"+human2.boy);

let ilkObjem =[{

    name:"Kaan",
    surName:"Yapar",
    age:25,
    departmant:"Jr.Software Dev"
}] 
let ikinciObjem ={
    name:"Hasan",
    surName:"Hayer",
    age:19,
    departmant:"FullDev"
}

let ikisiBirArada=ilkObjem.concat(ikinciObjem);

console.log(ikisiBirArada);

console.log(ikisiBirArada.length);

