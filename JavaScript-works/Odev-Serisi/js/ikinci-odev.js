
let employess =document.getElementById('calisanlar');
employess.addEventListener('submit',formSubmit)
function formSubmit(e){
    e.preventDefault();
    console.log("işlem gerçekleşti")
    addItem();
  }
  let fieldList =["user","userLast","identification","wages"]
let employessDOM =document.querySelector('#deneme')

const addItem = ()=>{
  let trDOM =document.createElement('tr')
  fieldList.forEach((item) => {
    let tdDOM =document.createElement('td')
    let fieldValue=document.querySelector(`#${item}`);
    tdDOM.innerHTML=fieldValue.value
    trDOM.appendChild(tdDOM)
  })
  employessDOM.appendChild(trDOM);


}

// let close = document.getElementById('close')
// close.addEventListener('submit',closeSubmit)

// function closeSubmit(e){
//   e.preventDefault();
//   console.log("işlem gerçekleşirken hata oluşmadı")
// }
// let fieldListDOM = document.createElement('span')
// fieldListDOM.forEach((item) => {

// })



//let deleteItem = document.createTextNode("X");