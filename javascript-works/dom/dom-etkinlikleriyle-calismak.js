//Dom Etkinlikleriyle Çalışmak
//https://www.w3schools.com/jsref/dom_ob_event.asp
//https://developer.mozilla.org/en-US/docs/Web/Events

let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)

function domClick(){
    console.log("Tıklandı")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red" 
}
let header = document.querySelector("#header")
header.addEventListener("mouseover", domOver)

function domOver(){
    console.log("denetlendi")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red" 
}

const emails = document.getElementsByName('e-posta')