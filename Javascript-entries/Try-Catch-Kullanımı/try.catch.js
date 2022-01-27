try{
    alert("Merhaba Kardeşim");

}
catch(mesaj){
    document.write(mesaj + " <br>");
}
finally{
    document.write("Hata mesajı bitti...")
}

try{
    adddlert("Welcome guest!");
}
catch(err){
   document.write("Hoşgeldin")
}