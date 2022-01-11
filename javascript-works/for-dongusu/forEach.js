const PRODUCTS = ["laptop","Phone","Speaker","Destop PC","Server","Mouse","Keyboard"]

 PRODUCTS.forEach((product, index, array) => array [index] = product + " 111")
 PRODUCTS.forEach((product, index, array)=>array[index] = `${product.toUpperCase()}`)

 console.log(PRODUCTS);

//const userListD0M = document.querySelector('#userList')
// for (index = 0; index < PRODUCTS.lenght;index++){
//     const liDOM = documen.createElement('li')
//     userListDOM.appendChild(liDOM)
// }


 const userListDOM = document.querySelector('#userList') //foreach örneği

 PRODUCTS.forEach(item =>{
    const liDOM =document.createElement('li')
     liDOM.innerHTML = item
     userListDOM.append(liDOM)
 })