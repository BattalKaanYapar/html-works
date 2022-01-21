//html form yapilacak bootstrap kullanabilirsin
// Form ismi calisanlar olacak
// Formda isim, soyisim, tcno, maas
//form gonderildiginde assagidaki bir tabloda gosterilecek
// tum calisanlar employess isminde bir array icerisinde tutulacak
//array icerisinde calisana ait object olacak
// tablonun her satirinda sil butonu olacak sil basildiginda tablodan silinecek
/**                              **/

let employess =document.getElementById('calisanlar');
employess.addEventListener('submit',formSubmit)
function formSubmit(a,b,c,d){
    const USER_NAME=document.querySelector('#user');
    const USER_LAST=document.querySelector('#userLast');
    const USER_IDENT=document.querySelector('#identification');
    const USER_WAGE=document.querySelector('#wages');
    addItem(USER_NAME.value,USER_LAST.value,USER_IDENT.value,USER_WAGE.value);

  }


let employessDOM =document.querySelector('#deneme')

const addItem = (userName,userLastName,identification,wage)=>{
  return false;
  let tdDOM =document.createElement('td')
  tdDOM.innerHTML = `${userName}${userLastName}${identification}${wage}`
  employessDOM.append(tdDOM);

}
addItem();


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

