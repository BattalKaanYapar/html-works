var nesne ={
    isim:"Kaan",
    soyIsım:"Yapar",
    yas:26,
    sehir:"istanbul",
    dizi:["Battal","Zehra","Arat"],
    denetle:true,
    gel:function(){return 70;}
}
nesne.gel = nesne.gel.toString(); // hemen json formatının üzerinde yapılması zorunludur.
var donustur=JSON.stringify(nesne);

document.write(donustur + "<br><br>");

var car =
{
    marka:"mercedes",
    yasi:3,
    renk:["sarı","yeşil","siyah"],
    model:{x5:2012,x6:2016,satici:"galeri"},
    stok:true
};


document.write(car + "<br>");
document.write(car.renk + "<br>");
document.write(car.renk[0]+ "<br>");
document.write(car.model.satici+ "<br><br>"); //object olduğu için . koyduk

var veri = JSON.stringify(car);

document.write("Veri json dönüştürüldü :"+veri +"<br>");

var data =JSON.parse(veri); // tekrardan nesneye çevrildi

document.write(data.marka + "<br>");// tekrardan nesneye çevrildi
document.write(data.model.satici + "<br>");
