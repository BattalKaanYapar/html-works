const maaslar = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];
const yeniMaaslar = maaslar.map((e)=>{
    if(e > 3000)
        return e * 1.15;
    else
        return e * 1.25;
});

console.log(yeniMaaslar);
document.write(yeniMaaslar);

const sayilar = [2, 3, 4, 5, 10]
const yeniArray = sayilar.map(deger => {
    return deger * 2
})

console.log(sayilar);
console.log(yeniArray);

const USERS = ["Ayşe","Mehmet","Tuğçe","Akşın"]

const NEW_USERS = USERS.map(user => user.toLowerCase())
console.log(NEW_USERS)

// const USERS_OBJ = USERS.map( item =>
//     {
//         return{userName: item, shortName: `${item[0]}.`,newName: `${item[0]}.toUpperCase()${item.slice(1)
//             .toLowerCase()}`}
//     }
//   )
//   console.log(USERS_OBJ)

const USERS_OBJ = USERS.map( item =>(

    {userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1)
        .toLowerCase()}`}
    )
    
)
  console.log(USERS_OBJ)