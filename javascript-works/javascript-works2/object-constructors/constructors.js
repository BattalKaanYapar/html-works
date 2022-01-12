var player1 = {
    name :"Ricardo",
    surname : "Quaresma",
    age : 34
}
console.log(player1);
var player2 = {
    name :"Kaan",
    surname : "Yapar",
    age : 25
}
console.log(player2);

function Player(name , surname, age) {
    this.name =name;
    this.surname = surname;
    this.age = age;
}

// var player3 = new Player('Ricardo',"Queresma",34);
// var player4 = new Player('Kaan',"Yapar",25);
// var player5 = new Player('Striker',"Witch",31);
// console.log(player3);
// console.log(player4);
// console.log(player5);
var players = [
    new Player("Ricardo", "Queresma",34),
    new Player("Kaan", "Yapar",25),
    new Player("Striker", "Witch",31)
];

console.log(players[0].name);