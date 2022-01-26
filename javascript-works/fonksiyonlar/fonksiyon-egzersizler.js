// Functions bolüm sonu egzersizleri

let counter = 0;
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener('click',function(){

    console.log(this.id)
})  


let isimler = [{name:"Kaan",surName:"Yapar",age:25,identification:3000}]

const addItem =()=>{
    for(var i=0;i<isimler.length;i++)

    console.log(isimler[i])
}

addItem();