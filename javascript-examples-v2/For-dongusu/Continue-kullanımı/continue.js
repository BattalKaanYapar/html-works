var sayi = 0;
while(sayi <=10){
    
    sayi++;

    if(sayi == 5 || sayi == 7){
        document.write("eksik bilgi verdiniz. <br>")
        continue;
    }
    document.write(sayi + ". Sayi <br>");
}

var text = "";
var i = 0;
while(i < 5){
    i++;
    if (i === 3){
        continue;
    }
    document.write(text += "<br> the number is " + i);
}
