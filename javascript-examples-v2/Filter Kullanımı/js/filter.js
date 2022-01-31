var yaslar =[11,12,13,156,69,56,43,98,65]

console.log("Normal Liste = " + yaslar + "<br> <br>")

function goster (yas){
    return yas <=18
}

console.log("yeni liste = "+ yaslar.filter(goster)+ "<br> <br>");

var dizi = [
    {meyve: "elma", mevsim: "yaz"},
    {meyve: "armut", mevsim: "yaz"},
    {meyve: "mandalina", mevsim: "kış"},
    {meyve: "portakal", mevsim: "kış"},
    {meyve: "çilek", mevsim: "yaz"},
    {meyve: "erik", mevsim: "yaz"},
    {meyve: "üzüm", mevsim: "kış"}
];

var dizi2 =[
    {sebze: "Patates", mevsim:"kış"},
    {sebze: "Domates", mevsim:"yaz"},
    {sebze: "Lahana", mevsim:"kış"},
    {sebze: "Pırasa", mevsim:"yaz"}
];

// filter() ile yaz meyvelerini filtreleyelim

var yazmeyveleri = dizi.filter(function(elmn){
    if(elmn.mevsim == "yaz"){
        return true;
    }
});

yazmeyveleri.forEach(function(sezonluk){
    document.write("Yaz Meyveleri =" +sezonluk.meyve + "<br>");
    document.write("<br>");
});

var kisMeyveleri = dizi.filter(function(event){
    if(event.mevsim == "kış"){
        return true;
    }
})

kisMeyveleri.forEach(function(sezon2){
    document.write("Kış meyveleri = "+sezon2.meyve +  "<br>");
    document.write("<br>");
})

dizi.push({meyve: "Karpuz",mevsim : "yaz"});

yazmeyveleri = dizi.filter(function(anonim){
    if(anonim.mevsim == "yaz"){
        return true;
    }
})

yazmeyveleri.forEach(function(e){
    document.write("Yaz Meyveleri Eklenen Karpuz=" +e.meyve + "<br>");
    document.write("<br>")
})

var diziler = dizi.concat(dizi2);
console.log(diziler)


var yeniYazMeyveleri = diziler.filter(function(k){
    if(k.mevsim =="yaz"){
        return true;
    }
})

yeniYazMeyveleri.forEach(function(kp){
    document.write("Yeni Yaz Sebzeleri =" + kp.sebze + " <br> ");
    document.write("<br>")
})