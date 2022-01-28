let users =[18,"Ayşe",50,"İmdat",99,88,"Okan","Fahrettin",23];

let userAges = [16,12,12,54,34,76]
document.write("List =" + users + " <br> <br>")

users.forEach(function(text){
    document.write(text + "<br>")
})

var cars = ["Bmw","Mercedes","Ferrari","Muscle"];

var carsModel = ["i5","c180","wiper","toxic"];

let carsModels;

carsModels = cars.concat(carsModel);

document.write("<br> "+carsModels);


function userAge (){

    return userAges<=18
}

document.write(" <br> <br> Users Filtrelendi : " + userAges.filter(userAge) + "<br>")

