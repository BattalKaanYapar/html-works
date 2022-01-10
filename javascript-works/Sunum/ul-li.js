let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();
  const USER_NAME = document.querySelector("#username");
  if (USER_NAME.value) {
    addItem(USER_NAME.value);
    USER_NAME.value = "";
  } else {
    alertDOM.innerHTML = alertFunction(
      "Başlık Bilgisi ",
      "Eksik Bilgi Girdiniz",
      "primary" //bonus ${warning 'den geldi}
    );
  }
}
let userListDOM = document.querySelector("#userList");
const addItem = (userName) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `${userName}`;
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
    );
  userListDOM.append(liDOM);
 };
