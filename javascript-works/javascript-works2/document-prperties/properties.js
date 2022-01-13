// console.log(document.URL)
// console.log(document.dir)
// console.log(document.title)
// console.log(document.domain)

// document.title = 'Uygulamalı Javascript';
// console.log(document.title);

// console.log(document.body);
// console.log(document.head);
// console.log(document.links);

// console.log(document.doctype)
/** 2**/
// console.log(document.getElementById('myHeader'));

// let yourHeader = document.getElementById('myHeader');


// yourHeader.textContent = 'New Jumbotron';
// yourHeader.innerText = 'YENİ JUMBOTRON';
// yourHeader.innerHTML = '<h1>Küçük başlık</h1>'

// console.log(yourHeader);

// yourHeader.style.backgroundColor = ('red');
// yourHeader.style.backgroundColor = 'red';


/** 2**/
// var myClass = document.getElementsByClassName('nav-link');
// var myId = document.getElementById('')
// console.log(myClass);

window.onload = function(){
    var beforeButton = document.querySelector = ('#beforeButton');
    beforeButton.addEventListener('click', function() {

        var newNode = document.createElement("p");
        newNode.innerHTML = "<strong>New Paragraph Element</strong>"
        newNode.setAttribute("id","myNode");

        var myArray = document.getElementsByClassName('.col-lg-6');
        myArray[0].insertBefore(newNode,myArray[0].firstElementChild);
    });
}