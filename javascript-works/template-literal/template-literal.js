const Name ="Battal Kaan Yapar";

const department = "Bilişim";

const salary = 4000;




// const a = "İsim: " + Name + "\n" + "Departman: " + department + "\n" + "Ücret: " + salary;

// const a = `İsim:${Name} \nDepartman:${department}\nMaaş:${salary}`; // ters slaş anlamı bir alt satıra geç.

//const html = "<ul> " + 
//            "<li> " + Name + "</li>" + 
//            "<li> " + department + "</li>" + 
//            "<li>" + salary + "</li>" + 
//            "</ul>";
function a() {
    return "Merhaba";
}
 const html = `
            <ul>
                <li>${Name}</li>
                <li>${department}</li>
                <li>${salary}</li>
                <li>${10 / 4}</li>
                <li>${a()}</li>
            </ul>
            `; // daha kolay yöntemi
document.body.innerHTML = html;