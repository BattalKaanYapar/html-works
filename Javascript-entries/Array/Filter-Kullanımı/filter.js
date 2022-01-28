let ages=[11,12,15,17,20,86,52,45,23,65,98,58]

document.write("Normal List :" + ages + " <br> <br>")

function goster (age){

    return age <= 18;
}

document.write("New list : " + ages.filter(goster))