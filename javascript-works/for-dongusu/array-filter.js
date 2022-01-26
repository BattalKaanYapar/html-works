// const elalem = ["Mic", "Cable","Speaker" ,"Desktop PC","Server", "Mouse", "Keyboard"]

// const NEW_PRODUCTS = elalem.filter(item => item.length >5)//5 harften fazla olanlar

// console.log(NEW_PRODUCTS);

// aktif kullanıcılar ?
const USERS = [
    {fullName: "Havva Yapar", isActive: false},
    {fullName: "Battal Kaan Yapar", isActive: false},
    {fullName: "Oğuzhan Bedir", isActive: false},
    {fullName: "Berkay Özen", isActive: false},
]

// const ACTIVE_USER =USERS.filter(user => user.isActive === true)
const ACTIVE_USER = USERS.filter(user => user.isActive)
console.log(ACTIVE_USER)
