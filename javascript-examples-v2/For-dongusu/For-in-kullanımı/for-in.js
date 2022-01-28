var x;
var value=" ";
var cars ={
    marka:"Mercedes",
    model:"C180",
    yas:3,
     
};

for(x in cars){
    value += cars[x] + " ";
}
document.write(value)