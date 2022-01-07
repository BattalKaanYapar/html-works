let car = {		
    brand: "BMW", 	// key(anahtar) "brand" "BMW" value(değerini) tutar 
    year: 2020,  		// key(anahtar) "year" 2020 value(değerini) tutar 
  };
  console.log(car.brand);

let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "2kg" : 2,
    modelName:"Macbook Pro",
    // model-name: "Macbook Pro",
    model_name: "Macbook Pro",
}
console.log(laptop1);

console.log(laptop1.brand)
console.log(laptop1.model)
console.log(laptop1["2kg"])

//Anahtar bilgisine yeni değer eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1)

//Yeni bilgi eklemek
laptop1.version = "10.15.7"
console.log(laptop1)

//Anahtar bilgilerine ulaşmak (keys) -->Object.keys(item)
keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1)); 
  
keys.forEach(keyInfo => {
    console.log(keyInfo);
    console.log(laptop1[keyInfo])
});