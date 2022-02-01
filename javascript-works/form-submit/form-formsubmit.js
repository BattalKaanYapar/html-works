
//FORM SUBMIT:

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)

function formSubmit(event){
    event.preventDefault()//Default islemi gerçekleşti
    console.log("islem gerçeklesti")
    
    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value) // değer alma (value)
    localStorage.setItem('score',scoreInputDOM.value) // işleme
}