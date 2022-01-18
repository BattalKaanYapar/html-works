var sehir = ["İstanbul", "Ankara", "İzmir", "Bursa","KemalPaşa",2,3];
var i = 0;
var text = "";
while (sehir[i]) {
    text += sehir[i] + "<br>";
    i++;
}
document.getElementById("demo").innerHTML = text;

let list = ["Elma","Armut","Karpuz","Vişne"]
alert(list[0]);
alert(list[1]);


var liste = ["Elma", "Armut", "Portakal", "Muz", "Kivi", "Karpuz", "Çilek"];
  var i, listeUzunluk = liste.length;

  for(i = 0; i < listeUzunluk; i++) {
    console.log(liste[i]);
  }

  document.write(liste)
