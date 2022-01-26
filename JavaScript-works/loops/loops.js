var x = 1;
do {
    console.log(x);
    x++
}
while ( x < 10 );
for (var y = 1; y < 10 ; y++ ) {
    if (y == 5){
        continue;
    }
    console.log(" " + y);
}