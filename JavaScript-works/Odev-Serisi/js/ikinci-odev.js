//html form yapilacak bootstrap kullanabilirsin
// Form ismi calisanlar olacak
// Formda isim, soyisim, tcno, maas
//form gonderildiginde assagidaki bir tabloda gosterilecek
// tum calisanlar employess isminde bir array icerisinde tutulacak
//array icerisinde calisana ait object olacak
// Or:
// employess = [
//   {
//     name:"sss",
//     surname:"sas",
//     citizenshipNumber:1231231,
//     maas:1300
//   },
//   {
//     name:"sss",
//     surname:"sas",
//     citizenshipNumber:1231231,
//     maas:1300
//   },
//   {
//     name:"sss",
//     surname:"sas",
//     citizenshipNumber:1231231,
//     maas:1300
//   }
// ]

// tablonun her satirinda sil butonu olacak sil basildiginda tablodan silinecek
var text = "<th>";
var text2 = "<td>";
var text3 = "<tr>";

let employess = [
  {
    name: "Kaan",
    surName: "Yapar",
    identification: "4769231920",
    wage: "3900",
  },
  {
    name: "Selin",
    surName: "Yordel",
    identification: "0983904582",
    wage: "21232",
  },
  {
    name: "Havva",
    surName: "Gündar",
    identification: "3485009312",
    wage: "3900",
  },
  {
    name: "Arat",
    surName: "Kızıldağ",
    identification: "6545690812",
    wage: "6000",
  },
];

let firstNameDOM = document.getElementById("firstname");

console.log(
  employess[0].name + employess[1].name + employess[2].name + employess[3].name
);
for(var i=0;i<employess[0].name.length;i++){
    firstNameDOM.innerHTML=employess[i];
    
}



// let firstNameDOM = document.getElementById('firstname');
// firstNameDOM.innerHTML=employess[0].name;
// let lastNameDOM = document.getElementById('lastname')
// lastNameDOM.innerHTML=employess[1].name;
// let identificationDOM = document.getElementById('identification')
// identificationDOM.innerHTML=employess[2].name;
// let wageDOM = document.getElementById('wage')
// wageDOM.innerHTML=employess[3].name;

// console.log(firstNameDOM)

// var employess = ["Kaan Yapar", "Berkay Özen", "Fahreddin Yapar", "Havva Yapar"];
// var firstName = ["Kaan", "Berkay", "Fahreddin", "Havva"];
// var lastName = ["Yapar", "Özen", "Yapar", "Yapar"];
// var identification = ["5875985958", "4875985213", "9876575958", "7421985958"];
// var wage = [4000, 6000, 12000, 4000];
// var formDOM = document.getElementById("calisanlar");
// var i=0;
// var textTD = "<td>"

// for(i;i<wage.length;i++){
//     textTD += wage[i];
// }

// document.getElementById('wage').innerHTML = wage;
// console.log(wage);

// var text = "<th>";
// var textTD = "<td>";
// var i = 0;
// console.log(formDOM);
// for (i = 0; i < employess.length; i++) {
//   text += employess[i] + " ";
// }
// text += "</th>";
// for (i = 0; i < identification.length; i++) {
//   textTD += identification[i] + " ";
// }
// for (i = 0; i < wage.length; i++) {
//   textTD += wage[i] + " ";
// }
// document.getElementById("employess").innerHTML = text;
// document.getElementById('identification').innerHTML = textTD;
