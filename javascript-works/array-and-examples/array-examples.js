let value;

 const numbers = [18,25,32,65,44,5];

const langs = ["Python","Java","C++","Javascript"];

const a = ["Merhaba",22,null,undefined,3.14];

value = numbers.length;

value = numbers[0];
 value = numbers [2];
 value = numbers [numbers.length -1];

// Herhangi bir indexteki değeri değiştirmek için

numbers [2] = 1000;

value =numbers;

//Index Of

value = numbers.indexOf(1000);

// Array'in sonuna değer ekleme (Push!)

numbers.push(2000);
value = numbers;

// Array'in başına değer ekleme (unshift!)

numbers.unshift(3000);
value = numbers;

// Sonundan değer atma

numbers.pop()
value = numbers;

// Baştan değer atma

numbers.shift()
value = numbers;

// Belli bir kısmını ayırmak / atmak 
numbers.splice(0,3);
value = numbers;

// Reverse methodu /ters çevirmek
numbers.reverse();
value = numbers;

value = numbers.sort();

value = numbers.sort(function(x,y){ //küçükten büyüğe sıralama
    return x - y;
});

value = numbers.sort(function(x,y){ // büyükten küçüğe sıralama
    return y - x;
} );

console.log(value);
