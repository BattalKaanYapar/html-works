const object1={
    a:"hasan",
    b:"dedo",
    c:"heso"
}
console.log(Object.keys(object1));
console.log(object1);


const array = ['a','b','c'];

console.log(Object.keys(array));

const anObj ={100: 'a', 2:'b',7:'c'};
console.log(Object.keys(anObj));//" Rastgele karakter sıralamasına ait nesne"

const myObj = Object.create({},{
    getFoo:{
        value: function () {return this.foo;
            
        }
    }
});
myObj.benimobjem = 1;
console.log(Object.keys(myObj));

let user1 ={
    firstName:"Kaan",
    lastName:"Peder",
    score:[1,2,3,4],
    shortName: function(){
        return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
        
    }
}
console.log(user1);

let settings = {
    userName:"loremIpsum",
    password:"BadPassword",
    isActive: false,
    ip:"123.64.213.2",
    serverName:"Logsign.tr"
}

let {userName,password,isActive,ip,serverName}= settings;
console.log(settings);
console.log(password);

let {userName:userName2, password:password2,isActive:isActive2,...newSettings}=settings;
console.log(userName2,password2,isActive2,newSettings);

let settings2 = {...settings}
let score =[100,200,500,12000]
//let settings2 = settings
// settings2.userName = "Değişen bilgi"  //tehlikeli , olmaz!!
// console.log("settings",settings)
// console.log("settings2", settings2);
settings2.userName = "Değişen bilgi"  //tehlikeli , olmaz!!
console.log("settings",settings)
console.log("settings2", settings2);

let [score1,score2,...otherScore]=score;

console.log(score1,score2,otherScore);

let copyOfScore= [...score];
console.log(score);

function yoo(){
    this.isim = "Kaan";
    this.yas = 25;
    this.dogumGunu =() =>{
        return "Ben : " + this.isim + " Yaşım : " + this.yas;
    }
}

const nove = new yoo();

console.log(nove.isim);

console.log(nove.dogumGunu());

function Boo(e,c){
    this.car = e;
    this.model = c;
}

const boom = new Boo("Honda",2013);
const boom_2 = new Boo("Vista",2023);

console.log(boom);
console.log(boom.model)
console.log(boom_2.model);

const a = function(){
    return 5 * 5;
};
const b = new Object({ isim : "Kaan"})

console.log(a());
console.log( " TypeOf" + typeof a)
console.log(b);
console.log(typeof b + " TypeOf");

