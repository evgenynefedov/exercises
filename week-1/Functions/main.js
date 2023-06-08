// exercies 0 -------------------------------------------------------------------------
let person = {
    name: "Vasya",
    speak: function (food) {
        console.log("I like " + food)
    }
}

person.speak("pizza")

// exercies 1-------------------------------------------------------------------------
const isEven = function (number) {
    if (number % 2 == 0) {
        console.log("The argument '" + number + "' is even number")
        return true
    } else if (number % 2 == 1) {
        console.log("The argument '" + number + "' is odd number")
    } else {
        console.log("the argument '" + number + "' is not a number")
    }
    return false
}

isEven(2)
isEven(5)
isEven("string");

// exercies 2-------------------------------------------------------------------------
const numbers = [12, 13, 542, 132, 65, 7, 12]
let evenNumbers = []

for (number of numbers) {
    if (isEven(number)) {
        evenNumbers.push(number);
    }
}

console.log("Even numbers from exercies 2: " + evenNumbers)

// exercies 3-------------------------------------------------------------------------
const checkExists = function (arrayOfNumbers, wantedNumber) {
    for (number of arrayOfNumbers) {
        if (number == wantedNumber) {
            return true
        }
    }
    return false
}

console.log(checkExists([1, 2, 3], 2))
console.log(checkExists([1, 2, 3], 5))

// exercies 4-------------------------------------------------------------------------
const calculator = {
    add: function (arg1, arg2) {
        return arg1 + arg2
    },
    subtract: function (arg1, arg2) {
        return arg1 - arg2
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

// exercies 5 (extra) -------------------------------------------------------------------------
const turnToKing = function (name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

const increaseByNameLength = function (money, name){
    return money * name.length
}
const makeRegal = function (name){
    return "His Royal Highness, " + name
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"