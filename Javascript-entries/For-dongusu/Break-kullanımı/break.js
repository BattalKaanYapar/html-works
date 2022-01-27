var sayi=1;
while(sayi <=10){
 if( sayi == 5){
        document.write(sayi + "değerine ulaştığı için döngüden çıktınız.")
        break;
    }
    
    document.write(sayi + "<br>");
    sayi++;
}

   

var text = ""

var i;

for(i = 0;i<5;i++){
    if (i===3){
        break
    }
    document.write(text += "Bu numara " + i + "<br>")
}

deger = 3;
a = "kaan","halil","merve","zerdal"

for (var i =0;i<a.lenght;i++){
    if (a[i] == deger){
        break
    }
}
