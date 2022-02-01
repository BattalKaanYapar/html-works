//Çarpma işlemi
var list = [2,3,4,5,6]

document.write(" Çarpma işlemi = " +list + "<br><br>")

function carpma (islem){
    return islem * 2 
}

var sonuc = list.map(carpma)

document.write(" Çarpma işlemi = " +sonuc + "<br><br>")
//Bölme işlemi
var list2 = [20,30,40,50,60]

document.write(" Bölme işlemi = " +list2 + "<br><br>")

function bolme (islem){
    return islem / 2 
}

var sonuc2 = list2.map(bolme)

document.write(" Bölme işlemi = " +sonuc2 + "<br><br>")