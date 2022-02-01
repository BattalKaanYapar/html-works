function yaz ()
{
    document.write("<br> <br>" + " Hello Functions <br><br>")
}

yaz();

function num()
{
    var sayi=10;
    var sayi2=2;
    var sonuc = sayi * sayi2;
    // var sonuc = sayi / sayi2;
    // var sonuc = sayi + sayi2;
    // var sonuc = sayi - sayi2;
    document.write("<br>" + sonuc + "<br>")
}

// num();

function islem (isim,yas)
{
document.write(" İsminiz : "+ isim + "<br>");
document.write(" Yaşınız: "+ yas + "<br>");
}

islem("Kaan",23)

function islem2(sayi,sayi2)
{
    var sonuc = sayi * sayi2
    document.write(sonuc)
}

islem2(2,5);

function map(f,a)
{
    var result = [];
    var i;

    for(i=0;i !=a.lenght;i++)
    {
        result[i] = f(a[i])
    }
    return result;
}

function goster ()
{
    var str="Hello";
    document.write("<br>"+str+ "<br>");
    function hayda(a,b)
    {
        var esit=a*b;
        document.write(esit);
    }
    hayda(6,2);
}

goster();

function uzun(a)
{
    return a*a;
}
document.write("<br>" +  uzun(5) + "<br>")

function uzun2(a,b)
{
    return a*b;
}
document.write("<br> Uzun2 = "+ uzun2(4,3) + "<br>")

var kisa= a =>a*a;
document.write(kisa(5) + "<br>")

var kisa2 = (a,b) => a * b;
document.write("<br> Kısa2 = "+kisa2(7,2) + "<br>")

var kisa3 = (a,b) =>
{ //Birden fazla işlem yapılacaksa süslü parantez kullanılacak..!
    var sayi;
    return sayi = a*b;
}
    document.write("<br> Kısa3 = "+kisa3(9,2) + "<br>")

// Arrow Func                       //Regular Func
// () => {};                        // function(){}
// x => x;                          //function(x){return x;}
// x=>x+5;                          //function(x){return x+5;}
//(x,y) => x * y;                   //function (x,y){return x * y}
//(x,y) =>                          //function (x,y){    
//{                                     let par =5;
//  let par =5;                         let hesap = (x,y)*par
//  let hesap = (x-y)*par;
//}                                 }
// x=>({id:x,height:270})           function(x)
// OR                               {return {id:x,height:270} 
//  x=>{return {id:x,height:270}};  }

var hesap = onent=>onent * 0.25;
console.log(hesap(100));

var hesap2 = ( (b,h)=>{
    var islem=(b * h )/2;
    return islem;
})(20,5)
console.log(hesap2);
function abc(){

    function a(){ 
        console.log(this)
    }
      a();
  }
  abc();

  window.name = "Yapar /Global";

    var person = {
        name: "Kaan",
    
        shout: function () {
            console.log("Benim adım...: ", this.name);
        },
        shout2: () => {
            console.log("Benim adım...: ", this.name);
        },
        // Shorter syntax
        shout3() {
            console.log("Benim adım...: ", this.name);
        }
    };
    person.shout(); 
    person.shout2();
    person.shout3(); 

    //isimsiz functions kullanma

    function uzun4 (a,b){return a*b}
    document.write(uzun4(5,10) + "<br>");
    
    (sayi3=>
        {
            var g=sayi3 * 10;
            document.write(g)})(20);
    