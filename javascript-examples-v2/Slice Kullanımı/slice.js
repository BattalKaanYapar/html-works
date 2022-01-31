var eleman =["battal","kaan","ogi","ipek","havva","ali","yusuf","berkay"]

document.write("eski liste = " + eleman + "<br><br>")

var yeni = eleman.slice(1,5);

document.write("yeni liste = " + yeni + "<br><br>");

function myFunction(){
    var fruits = ["Banana","Apple","Mango","Tomato"]

    var citrus = fruits.slice(1,3);

    document.getElementById("demo").innerHTML = citrus;
}

