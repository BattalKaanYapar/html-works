/** Abimin Verdiği ödev Serisi**/

                            
const myArray = ["kaan","fahreddin","yavuzAlp"]
const ages = [25,35,5]
 const schoolList = ["Ümraniye","Maltepe","Atakent"]
var nameList ={}

for(var i=0;i < myArray.length;i++){
    nameList[myArray[i]]={
        school:schoolList[i],
        age:ages[i]
    } 
    
}
console.log(nameList)
