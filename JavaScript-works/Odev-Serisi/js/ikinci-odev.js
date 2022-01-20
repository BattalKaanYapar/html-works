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
var formDOM = document.getElementById("calisanlar");
var text = "<th>";
var textTD = "<td>";
var textTR = "<tr>";
var i = 0;
console.log(formDOM);
for (i = 0; i < employess.length; i++) {
  text += employess[i] + " ";
}
text += "</th>";
for (i = 0; i < identification.length; i++) {
  textTD += identification[i] + " ";
}

document.getElementById("samples").innerHTML = text;
