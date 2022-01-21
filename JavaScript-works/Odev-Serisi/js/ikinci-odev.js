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
let firstNameDOM = document.getElementById("deneme");
let surNameDOM = document.getElementById('lastname');
let identDOM = document.getElementById('identification');
let wageDOM = document.getElementById('wage');
let calisanlarDOM =document.getElementById('calisanlar');
calisanlarDOM.addEventListener('submit',formSubmit)

function formSubmit(event){
  event.preventDefault()
  console.log("İşlem gerçekleşti")
}

// let employess = [
//   {
//     name: "Kaan",
//     surName: "Yapar",
//     identification: "4769231920",
//     wage: "3900",
//   },
//   {
//     name: "Selin",
//     surName: "Yordel",
//     identification: "0983904582",
//     wage: "21232",
//   },
//   {
//     name: "Havva",
//     surName: "Gündar",
//     identification: "3485009312",
//     wage: "3900",
//   },
//   {
//     name: "Arat",
//     surName: "Kızıldağ",
//     identification: "6545690812",
//     wage: "6000",
//   },
// ];
// submit dinle fonksiyon tetiklet
//<tr><td>kaan</td><td>yapar</td><td>yasdapar</td><td>sadad</td></tr>
// function addEmployess(){
//   employess.push({
//     name: "Arat",
//     surName: "Kızıldağ",
//     identification: "6545690812",
//     wage: "6000",
//   })
// }
// addEmployess();


// for(var i=0;i<employess.length;i++){
//   firstNameDOM.innerHTML+= "<tr><td>" + employess[i].name + "</td><td>yapar</td><td>yasdapar</td><td>sadad</td></tr>";
//     //firstNameDOM.innerHTML+= "<tr>" + employess[i].name + "</tr>"; 
//     console.log(employess[i].name);
// }

