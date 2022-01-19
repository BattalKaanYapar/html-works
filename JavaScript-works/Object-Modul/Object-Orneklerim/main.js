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