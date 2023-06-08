// Instance how place of const defenition effects to the visibility of the const inside and outside the block
const bag = ["flashlight", "medicine"]
const moreItems = ["tent", "water bottle", "knife", "rope"]

if(bag.length < 3){
  const nextItem = moreItems[0]
  bag.push(nextItem)
}

console.log(bag)
console.log("Added " + nextItem)

//exercise 1-------------------------------------------------------------------------------
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles") // here disrance = 8
}

console.log("Damn, you see this gal? She ran " + distance + " miles") // here disrance is invisible (is not defined)


//exersice 2-------------------------------------------------------------------------------
if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound) // here cosSound is not defined
}

//exercise 3-------------------------------------------------------------------------------
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder) //here everything is fine
    }

    console.log("Finished serving all the orders: " + orders) //here everything is fine also, because it is block of function and attribute "orders" is visible here 
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)

//exercise 4-------------------------------------------------------------------------------
const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot) //here only pot is visible
}

plant()


//exercise 5-------------------------------------------------------------------------------
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found // found is not defined in this block

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}

//exercise 6-------------------------------------------------------------------------------
const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true // we can't redeclare const
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh") 
}
else {
    console.log("Here we go again...")
}
