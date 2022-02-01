document.write("<br><br>"+"REDUCE RİGHT : "+ "<br><br>")
var mat = [10,20,30,40,50,100];

document.write("liste  = " + mat + " <br><br>");

function islem(toplam , sayi){
    document.write("toplam = " +toplam + "<br><br>" )
    document.write("sayi = " +sayi + "<br><br>" )
    return toplam + sayi;
}

var ilkDeger =100;

var sonuc =mat.reduceRight(islem,ilkDeger);

document.write("sonuc = "+ sonuc);

const A = [[1,2,3],[4,5,6],[7,8]];

a =A.reduceRight((previousValue,curruntValue)=>previousValue.concat(curruntValue));

document.write("<br><br>"+a + "sağdan sola yazdırıldı ve birleştirildi concat ile");