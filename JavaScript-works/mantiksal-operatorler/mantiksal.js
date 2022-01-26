var age = 25;

if( age >= 20 && age <= 50){
    console.log("Uye Olabilirsiniz");
}else{
    console.log("Uye olamazsınız")
}


ayşe = 13;
mehmet = 27;
hasan =42;
erdem = 78;

if (ayşe < erdem && erdem - 65 == ayşe ){
    console.log("Ayşe erdem'den küçüktür/Ayşe erdem'e yaşıttır ")
}else{
    console.log("herhangi bir seçenek")
}

if(hasan > mehmet || hasan > ayşe){
    console.log("Hasan Büyüktür erdemden veya  Ayşeden")
}
else{
    console.log("Büyük değildir.")
}

var job = 'develop'

if (job =='!develop' || age >=25){
    console.log("Üye Olabilirsiniz")
}else{
    console.log("Üye Olamazsınız")
}

var isMarried = true;
if(!isMarried){
    console.log("Evlisiniz");
}else{
    console.log("Evli Değilsiniz")
}

var a = 4;
var b = -3;
var c = 6;

if (a<b && a>c){
    if(b>c){
        alert(a +" " + b + " " + c );
    }else {
        alert(a + " " + c + " " + b);
    }
}else if (b<c && a<c){
    if(c>a){
        alert(a + " =a " + c + " =c" + b + " =b");
    }else{
        alert(a + " " + b + " " + c);
    }
}else {
    console.log("Herhangi")
}