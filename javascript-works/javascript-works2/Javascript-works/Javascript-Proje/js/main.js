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
  if (USER_NAME.value) {
    addItem(USER_NAME.value);
    USER_NAME.value = "";
  } else {
    alertDOM.innerHTML = alertFunction(
      "Başlık Bilgisi ",
      "Eksik Bilgi Girdiniz",
      "primary"
    );
  }
}
let userListDOM = document.querySelector("#userList");
const addItem = (userName) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `
    ${userName}`;
    userListDOM.append(liDOM);
};

