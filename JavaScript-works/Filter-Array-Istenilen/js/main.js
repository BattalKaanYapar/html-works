// const PRODUCTS = ["Mic","Cable","Speaker","Desktop PC","Server","Mouse","Keyboard"]

// const NEW_PRODUCTS = PRODUCTS.filter(item => item.length >5)
// console.log(NEW_PRODUCTS)

const USERS =[
    {fullName: "Allie Sharlock",isActive:false},
    {fullName: "Kaan Yapar",isActive:false},
    {fullName: "Oğuzhan Bedir",isActive:false},
    {fullName: "Berkay Özen",isActive:false}
]
// console.log(NEW_PRODUCTS)

function ekle (e){
    USERS.push({fullName:"Bla blaa",isActive:false})
    
}
// ekle();
console.log(USERS)

for(var i=0;i<USERS.length;i++){
    console.log("Çalışıyor",USERS[i])
    let trDOM =document.createElement('tr')
   fieldList.forEach((item) => {
     let tdDOM =document.createElement('td')
     let fieldValue=document.querySelector(`#${item}`);
     tdDOM.innerHTML=fieldValue.value
     trDOM.appendChild(tdDOM)
   })
   let closeButton= document.createElement('td')
   closeButton.innerHTML='<button type="button" class="btn btn-danger" onClick="removeItem()">Sil<button>' 
   trDOM.appendChild(closeButton);
   employessDOM.appendChild(trDOM);
}


//add 'e basıldığı zaman