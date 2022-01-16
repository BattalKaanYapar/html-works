// FORMLARLA CALISMAK:Bölüm Sonu Egzesizi

/*
1:Formu Seç
2:Input Bilgisini UL Icerisine ekle
3:Form içindeki bilgiyi sıfırlar
4:Eğer forma bilgi girilmezse kullaniciyi uyar
*/
let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("submit", formHandler);

const alertDOM = document.querySelector("#alert");

const alertFunction = (title, message, className = "warning") => `
  <div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong>${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    `;

function formHandler(event) {
  event.preventDefault();
  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score");
  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value); //gönderdikten sonra sıfırladık.
    USER_NAME.value = "";
    SCORE.value = "";
  } else {
    alertDOM.innerHTML = alertFunction(
      "Başlık Bilgisi ",
      "Eksik Bilgi Girdiniz",
      "primary" //bonus ${warning 'den geldi}
    );
  }
}
let userListDOM = document.querySelector("#userList");
const addItem = (userName, score) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `
    ${userName} 
    `;
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  userListDOM.append(liDOM);
};

//**** Ödev Kısmı *****/

//const userForm = document.querySelector("#userForm");
//const userName = document.querySelector("#userName");
//const userSurname = document.querySelector("#userSurname");
//const userAge = document.querySelector("#userAge");
//const subContainer = document.querySelector("#.sub-container");
//const submitHandler = (e) => {
/*1*/ //form submit edildiğinde tarayıcının yenilenmesini önleyen fonksiyon
//   if (userName.value && userSurname.value /* && 2 */ ){
//Age değerinin 18'den büyük veya eşit olmasını kontrol eden değer.
//      showInfos(userName.value, userSurname.value, userAge.value);
//      userName.value = "";
//      userSurname.value = "";
//      userAge.value = "";

//   } else {
//     alert("Hatalı giriş, lütfen tekrar deneyin!");
// }
//};
//input değerlerinin fonksiyon içerisinde kullanılması ve create edilen "li" elementine eklenmesi
//const showInfos = (/* 3*//*4 *//*5 */) =>{
//  const liDom = document.createElement("li");
// liDom.innerHTML = `Your Information: ${userName} ${userSurname} ${userAge}`;
// liDom.classList.add("user-info");
//  subContainer.append(liDom);
// if (subContainer.firstChild){
//     subContainer.style.display ="flex";
//}
//}
//formun gönderildiğinde gerçekleşek olan eventin ismi
//userForm.addEventListener(submitHandler)
