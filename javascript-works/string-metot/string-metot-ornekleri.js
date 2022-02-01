let value;

const firstName = "Oğuz";
const lastName = "Bedir";

const langs = "Java , Python , C++";

value = firstName + lastName;
value = firstName + " " + lastName;

value = "Battal Kaan";
// value = value + "YAPAR";
value += " " + "Yapar";


value =firstName.length;

value = firstName.concat(" ",lastName," ","Caz"); // firstName + " "

value = firstName.toLowerCase();

value = firstName.toUpperCase();

value = firstName[0];
value = firstName[2];
value = firstName[4];
value = firstName.length;

value = firstName[firstName.length -1];


//Index of örnekleri

value = firstName.indexOf("O"); // 0 dan başlar saymaya

value = firstName.indexOf("ğ");

value = firstName.indexOf("B"); //eğer herhangi bir karakter yok ise -1 olacak

// Char At

value = firstName.charAt(0);

value = firstName.charAt(firstName.length -1);

// Split Metodu Önemli!!!!!

value = langs.split(","); // her bir elemanı virgüle göre tek tek parçaladı..

// Replace // değiştirmek için kullanılan metot

value = langs.replace("Python","CSS");

// Includes

value =langs.includes("Java");

value =langs.includes("string'in içinde olmayınca /false oluyor");
console.log(value);






