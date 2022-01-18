var sehir = ["İstanbul", "Ankara", "İzmir", "Bursa","KemalPaşa",2,3];
var i = 0;
var text = "";
while (sehir[i]) {
    text += sehir[i] + "<br>";
    i++;
}

document.getElementById("demo").innerHTML = text;


let list = ["Elma","Armut","Karpuz","Vişne"]
// alert(list[0]);
// alert(list[1]);


var liste = ["Elma", "Armut", "Portakal", "Muz", "Kivi", "Karpuz", "Çilek"];
  var i, listeUzunluk = liste.length;

  for(i = 0; i < listeUzunluk; i++) {
    console.log(liste[i]);
  }

  document.write(liste)

let counter = 0 ;

while (counter < 10 ){

  console.log(counter)
  counter ++ ;
}

// let userName = "";
// while (!userName) // userName değilse
// {
//   userName = prompt("Kullanıcı adınızı girin:")
//   console.log(userName)
  
// }


let surName;
document.write("<br>")
while (surName !=""){
  surName = prompt("Adınız nedir ?")
  console.log(surName)
  document.write(surName.length)
  break
}
document.write("<br>")

var cars = ["honda","mercedes","porche","tohside"]

var index = 0;
//var index = 1;
//var index = 2;
//var index = 3;

while(cars[index]){
  console.log(cars[index])
  index++;
  document.write("cars değişkenine örnekler = "+ cars)
}
document.write("<br>")

let pc= ["acer","notebook","toshiba","samsung"]
i=3;
while(pc[i]){
  console.log(pc)
  i++;

}
document.write(pc)