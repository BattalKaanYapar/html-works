// 1-Html form oluştur.
// 2-Bir adet buton olsun
// 3-buton'a basıldığı zaman , console'a butona basıldı yazılsın
// 4-buton'a basıldında formdaki inputun değeri console'a yazılsın
// 5-html de bir adet boş ul oluşturulacak.ID=myList 
// 6-inputta yazılan değeri bir adet li çevireceğiz ve ul nin içerisine göndereceğiz
// 7-Eklenen ul içinde bir adet sil button 'u olacak,
// 8-Sil butonuna basıldığı zaman basılan li index'ini console yazdırılacak (func)
// 9-Li'nin Sil'ine basıldığı zaman hangi li 'ye basıldı ise o benim ul'emden silinecek
// 



var myNodelist = document.getElementsByTagName("li");
var index;
for (index = 0; index < myNodelist.length; index++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[index].appendChild(span);
}


var close = document.getElementsByClassName("close");
var index;
for (index = 0; index < close.length; index++) {
  close[index].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



for (index = 0; index < myNodelist.length; index++) {
    localStorage.setItem(`eleman ${index+1}`,myNodelist[index].innerText)
  }



var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Bir şeyler yazmalısın!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = "";

 

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  $("#liveToast").toast("show");


  
  for (index = 0; index < close.length; index++) {
    close[index].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }


  localStorage.setItem(`eleman ${localStorage.length+1}`,li.innerText)

}
