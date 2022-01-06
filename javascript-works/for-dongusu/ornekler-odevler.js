// for (var i = 10; i>=0; i--){
//     console.log(i);
// };
// /*Ödev Çift sayıları yazdır. */
// for (var i = 20; i<=50; i++){
//     console.log(i);
// }
// for (var i = 0; i < 50; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     };
// };
// /*Ödev tek sayıları yazdır */
// for (var i = 0; i < 50; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
//     };
// };

/**While Döngüsü Örnekleri**/
// let cars = ['bmw','mercedes','ferrari','lamborgini','dodge']
// while(cars <= cars.length){
//     console.log(cars);
// }
// console.log(cars);
// cars.reverse();
// console.log(cars);
// cars.unshift('Bugatti');
// console.log(cars);
// cars.push('Vosvos')
// console.log(cars);
// cars [2] = 'Muscle';
// console.log(cars);

/** forEach Örnekleri **/

/* const numbers = [4, 11, 9];
const newArray = [];

numbers.forEach(function(numbers){
  newArray.push(numbers*3);
});
console.log(newArray);

const animals = ["cat" , "dog" , "bird", "horse"];
  
animals.forEach((value , index , array) => {
  console.log('value: ', value );
  console.log('value parametresinin aldığı index :', index );
  console.log('array:' , array );
});
*/
/** Array-Filter Örnekleri **/
const person = [{
  name: "Adem", 
  age: 25,
  languages: ["JavaScript", "CSS"],
},
{
  name: "Oğuz",
  age: 33,
  languages: ["Java", "HTML"],
  }
];
const newPerson =person.filter(item => item.length < 30)
console.log(newPerson)
