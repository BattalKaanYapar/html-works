const process = 2;

if (process === 1) {
    console.log("İşlem 1");
}
else if (process === 2) {
    console.log("İşlem 2");
}
else if (process === 3 ){
    console.log("İşlem 3");
}
else {
    console.log("Geçersiz İşlem");
}

const process2 = 2;

switch(process2){
    case 1:
        console.log("İşlem 1");
        break;
    
    case 2:
        console.log("İşlem 2");
        break;
    
    case 3:
        console.log("İşlem 3");
        break;
    
}
var job = "polis";

switch (job) {
  case "doctor":
    console.log("Ben bir doktorum.");
    break;
  case "komutan":
    console.log("Ben komutanım");
  case "teacher":
    console.log("Ben bir öğretmenim.");
    break;
    default:
        console.log("Ben bir işsizim")
}

