let user1 = {
    firstName :"Bilgin",
    lastName :"Uzman",
    score: [1,2,3,4],
    isActive : true,
    shotName:function(){
        return `${this.firstName}${this.lastName}`
    }
};

console.log(user1);


var person = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	city: 'Istanbul',
	introduce: function () {
		console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
	},
};

console.log(person)

var person = {
    name: "Rumeyse",
    surName: 'Turgut',
    age: 23,
    introduce:() =>{
        return `My name is ${this.name} ${this.surName}, I'm ${this.age} yo.`
    }
};
console.log(person.introduce());
var person1 = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	introduce: () => {
		return `My name is ${person1.name} ${person1.surname}, I'm ${person1.age} yo.`;
	},
};
console.log(person1)

var car = {
    name:"Nissan",
    model:"400A",
    color:"Black",
    start:function() {
        return this.name + " " + this.model + " Çalıştırıldı";
    },
    drive:function() {
        return this.name + " " + this.model + " Kullanılıyor";
    },
    brake:function() {
        return this.name + " " + this.model + " frene basıldı";
    },
    stop:function() {
        return this.name + " " + this.model + " durduruldu";
    }
};
let pandora = document.getElementById('result')
    pandora= car.start() + "<br>" +
    car.drive() + "<br>" +
    car.brake() + "<br>" +
    car.stop() + "<br>" ;

    console.log(pandora)
