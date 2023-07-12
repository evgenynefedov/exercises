//--------------------------- Spot Check 2 --------------------------------
class Human{
    constructor(name, age, isFriendly){
        this.name = name
        this.age = age
        this.isFriendly = isFriendly
    }
}

const ameer = new Human("Ameer", 29, true)

console.log(ameer)


//--------------------------- Spot Check 3 --------------------------------
class Animal{
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
        this.children = []
    }

    giveBirth(name){
        console.log("Boom. Birthed " + name)
        this.children.push(name)
    }
}

const cat = new Animal("Lussy", 4)

cat.giveBirth("Dolly")
console.log(cat.children) // should print an array with 1 item: ["Dolly"]

//--------------------------- Spot Check 4-5-6 --------------------------------
class Vehicle{
    _fuel 

    constructor(x, y, speed){
        this.x = x
        this.y = y
        this._speed = speed
        Vehicle.carsSold++;
    }

    set fuel(fuel){
        if(fuel<0 || fuel >150){
            return console.log("Fuel must be between 0 and 150")
        }
        this._fuel = fuel
    }

    get fuel(){
        return this._fuel
    }

    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }

    get speed(){
        return this._speed
    }

    static getInfo(){
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }

    static calculateMoney(){
        let summ = Vehicle.carsSold * Vehicle.priceOfCar
        console.log("We've earned " + summ + " money")
    }
}

Vehicle.carsSold = 0;
Vehicle.priceOfCar = 30000;


const car1 = new Vehicle(1,2,-3)
const car = new Vehicle(3,4,5)

console.log(car1) 

Vehicle.getInfo()
Vehicle.calculateMoney()

const c = new Vehicle()
c.x = 3
c.y = 1
c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed) // prints undefined

c.speed = 10
console.log(c.speed)
console.log(c)

c.fuel  = 180 //should print error
//console.log(fuel) // undefined?? -> error "is not defined"!
c.fuel = 150
console.log(c.fuel) // should print 150