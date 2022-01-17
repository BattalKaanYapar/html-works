var myNodelist = document.getElementsByTagName("li");
var index;
for (index = 0; index < myNodelist.length; index++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("");
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
    alert("Bir şeyler yazmalısın!!");
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