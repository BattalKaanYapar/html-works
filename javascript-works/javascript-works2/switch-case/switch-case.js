/*switch (kontrol edilecek durum ){ yapısı bu şekilde

    case 1:
        kod çalıştır;
        break;
        .....
    case 2:
        kod çalıştır;
        break;
        .....
    default :
        kod çalıştır;    
}*/

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
