const LOREM_LIST = [
    'lorem','ipsum','dolor','amet','consectetur','adipisicing','elit'
]
// index bilgisini içeride döndürmek

let counter = 0

for(; counter < 10; counter++){
    console.log(counter)
    if(counter === 5)
    {break}
}
for(; counter < 10; counter++){
    if(counter === 5){continue}
    console.log(counter)
}

const UL_DOM = document.querySelector('#userList')

let index = 0

for(; index < LOREM_LIST.length; index++){
    if (LOREM_LIST [index] == "dolor"){break} // break ona kadar olan kısmı yazdır.
    let LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
}
for(; index < LOREM_LIST.length; index++){
    if (LOREM_LIST [index] == "dolor"){continue} // onu geç anlamında kullanılır
    let LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
}
var kullaniciSayisi = prompt("1'den 100'e kadar bir sayı giriniz. Ben bu sayıyı 100'e kadar yazdıracağım.", "");
    for (var i = kullaniciSayisi; i < 100; i++) {
        if (i >= 80 && i < 90) {
            continue;
        }
        document.write(i + "<br>");
    }