/** 2.Odev Kurallari **/
// html form yapılacak bootstrap kullanılabilir.
// form ismi = calisanlar olacak
// formda isim, soyisim,tcno,maaslar olacak
// form gönderildiğinde assağıda ki bir tabloda gösterilecek
// tüm çalışanlar employess isminde bir array içerisinde tutulucak
// array içerisinde çalışana ait object olacak // her çalışanın kendisi içine giricek
// or :
// employess =[ {
//    name , surname,citizenshipNumber,maas="",
//}]
//tablonun her satırında sil butonu olacak sil ' e basıldığında tablodan silinecek//
var employess = ["Kaan Yapar", "Berkay Özen", "Fahreddin Yapar", "Havva Yapar"];
var firstName = ["Kaan", "Berkay", "Fahreddin", "Havva"];
var lastName = ["Yapar", "Özen", "Yapar", "Yapar"];
var identification = ["5875985958", "4875985213", "9876575958", "7421985958"];
var wage = [4000, 6000, 12000, 4000];
employess[0]={
    firstName:"Kaan",
    lastName:"Yapar",
    identification:"5875985958",
    wage:4000
},
employess[1]={
    firstName:"Berkay",
    lastName:"Ozen",
    identification:"4875985213",
    wage:6000
}
employess[2]={
    firstName:"Fahreddin",
    lastName:"Yapar",
    identification:"9876575958",
    wage:12000
}
employess[3]={
    firstName:"Havva",
    lastName:"Yapar",
    identification:"7421985958",
    wage:4230
}
for(var i=0;i<employess.length;i++){
    console.log(employess);
}

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
