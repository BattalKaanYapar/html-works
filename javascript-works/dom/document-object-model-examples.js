console.log(document.location.pathname)

console.log(document.head)

console.log(document.body)

console.log(document.URL)

console.log(document.baseURI)

document.body.style.backgroundColor = "black"

let value;

const programmer = {
    name : "Battal Kaan Yapar",
    age : 25,
    email : "k-ypr@gmail.com",
    langs : ["Java","Css","Html5"],

    adress : {
        city : "Istanbul",
        street : "Umraniye"
    },

    work : function (){

        console.log("Programcı Çalışıyor...");
    }
}

value = programmer;


value = programmer.email; // Genel olarak kullanılan

//value = programmer["email"];
//console.log(value);

value = programmer.langs; //Array şeklinde


value = programmer.adress;


programmer.work();

const programmers = [
    {
        name : "Battal Kaan" , age : 25
    }

    ,

    {
        name : "Oğuz" , age : 25
    }
];
value = programmers[0].name;

console.log(value);
