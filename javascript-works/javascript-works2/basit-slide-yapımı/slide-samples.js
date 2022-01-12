var i = 0;
var images =['https://picsum.photos/420/320?image=0',
'https://via.placeholder.com/420x320/ff7f7f/333333?text=Sample',
'https://fakeimg.pl/420x320/ff0000,128/333333,255/?text=Sample&font=lobster',
'https://placeimg.com/420/320/tech/grayscale'];

var duration  = 900;

function slideImg (){
    document.slide.src =images[i];
    if (i < images.length -1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("slideImg()",duration);

}
window.onload = slideImg;