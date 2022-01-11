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
      "Eksik Bilgi Girdiniz",
    );
  }
}
let userListDOM = document.querySelector("#userList");
const addItem = (userName) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `${userName}`;

  userListDOM.append(liDOM);
 };
