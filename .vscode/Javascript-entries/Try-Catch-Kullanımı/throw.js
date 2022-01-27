var sayi = 5;

try {
    if(sayi == 2){throw" sayi değeri 2"}
    if(sayi == 5){throw" sayi değeri 5"}
    if(sayi == 9){throw" sayi değeri 9"}
}catch(mesaj){
    document.write(mesaj + "<br>");
}


let x = 10,y=5;

try{
    if(x == y){
        throw "e1";
    }else{
        throw "e2";
    }
}catch(e){
    if(e == "e1")
    alert("exception: both are same value!");
    if(e == "e2")
    alert("Exception: Both are different!");
}