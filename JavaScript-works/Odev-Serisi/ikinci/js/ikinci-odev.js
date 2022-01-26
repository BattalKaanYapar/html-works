//  const addItem = ()=>{
//    let trDOM =document.createElement('tr')
//    fieldList.forEach((item) => {
//      let tdDOM =document.createElement('td')
//      let fieldValue=document.querySelector(`#${item}`);
//      tdDOM.innerHTML=fieldValue.value
//      trDOM.appendChild(tdDOM)
//    })
//    let closeButton= document.createElement('td')
//    closeButton.innerHTML='<button type="button" class="btn btn-danger" onClick="removeItem()">Sil<button>'
//    trDOM.appendChild(closeButton);
//    employessDOM.appendChild(trDOM);

//  }
// array obje
// ekle butonuna yazınca eleman yeni objenin içerisinde eklenecek gelsin consollansın

//  yöntem geçersiz.
//   aray içerisinde tutulacak değerler  objenin içerisinde
//   array de dönülerek tr td ler onun içindekiler ile yaratılacak
//   dönerken sil button koyulacak
//   sil butonunun parametresi index butonu girilecek index numarası verilecek

// *************  2.DENEME  ********************************
fieldList = ["name", "surName", "wage", "identification"];
let employess = document.getElementById("calisanlar");
employess.addEventListener("submit", formSubmit);
function formSubmit(e) {
  e.preventDefault();
  console.log("işlem gerçekleşti");
  addList();
}

let employessDOM = document.querySelector("#deneme");
let userList = [
  {
    name: "Kaan",
    surName: "Yapar",
    identification: 47518217212,
    wage: 4000,
  },
  {
    name: "Hasan",
    surName: "Kelam",
    identification: 32518245613,
    wage: 8000,
  },
  {
    name: "Beyto",
    surName: "Parlak",
    identification: 76421765673,
    wage: 5000,
  },
];

const addList = () => {

  console.log(userList);
  let name = document.getElementById("user").value;
  let surName = document.getElementById("userLast").value;
  let identification = document.getElementById("identification").value;
  let wage = document.getElementById("wages").value;
  userList.push({
    name: name,
    surName: surName,
    identification: identification,
    wage: wage,
  });
  console.log(userList);

  console.log(name);
  for (var i = 0; i < userList.length; i++) {
    let trDOM = document.createElement("tr");

    let tdNameDOM = document.createElement("td");
    tdNameDOM.innerHTML = userList[i].name;
    trDOM.appendChild(tdNameDOM);

    let tdSurNameDOM = document.createElement("td");
    tdSurNameDOM.innerHTML = userList[i].surName;
    trDOM.appendChild(tdSurNameDOM);

    let identificationDOM = document.createElement("td");
    identificationDOM.innerHTML = userList[i].identification;
    trDOM.appendChild(identificationDOM);

    let wageDOM = document.createElement("td");
    wageDOM.innerHTML = userList[i].wage;
    trDOM.appendChild(wageDOM);

    let removeDOM = document.createElement("button");
    removeDOM.innerHTML =
      '<button type="button" class="btn btn-danger" id="removeButton">Sil<button>';
    trDOM.appendChild(removeDOM);

    removeDOM.addEventListener('click' , removeItem);
    
    const removeList =()=>{
        userList
    }

    // removeDOM.addEventListener('click',()=>{
    //         trDOM.removeChild(removeDOM);
            
    //     })
    
    employessDOM.appendChild(trDOM);
  }

  // fieldList.forEach((item) => {
  //          let tdDOM =document.createElement('td')

  //         //  let fieldValue=document.querySelector(`#${item}`);
  //          tdDOM.innerHTML=fieldValue.value
  //          trDOM.appendChild(tdDOM)
  //        })
};
