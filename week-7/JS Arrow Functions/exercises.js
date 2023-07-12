//------------------------- Exercise 1 -----------------------------
const e1 = users.map(u => { return {email: u.email, companyName: u.company.name}})
console.log(e1)

//------------------------- Exercise 2 -----------------------------
const e2 = users.filter(u => u.address.zipcode.toString()[0] == 5)
console.log(e2)

//------------------------- Exercise 3 -----------------------------
const e3 = users.filter(u => u.address.zipcode.toString()[0] == 5).map(u => u.id)
console.log(e3)

//------------------------- Exercise 4 -----------------------------
const e4 = users.filter(u => u.name[0] == "C").map(u => u.name)
console.log(e4)

//------------------------- Exercise 5 -----------------------------
const e5 = users.every(u => u.address.city == "South Christy")
console.log(e5)

//------------------------- Exercise 6 -----------------------------
const e6 = users.find(u => u.address.suite == "Apt. 950")
console.log(e6.company.name)

//------------------------- Exercise 7 -----------------------------
const printUserSummury = function(user){
    console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`)
}

users.forEach(printUserSummury)