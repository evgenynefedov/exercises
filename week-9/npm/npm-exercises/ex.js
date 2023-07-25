//-----------------------------------------------Ex 1----------------------------------------------
const validator = require('validator');

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
console.log(validator.isEmail('shoobert@dylan'));

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log(validator.isMobilePhone("786-329-9958", "en-US"));

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
console.log(validator.blacklist(text, blacklist));

//-----------------------------------------------Ex 2----------------------------------------------

const { faker } = require('@faker-js/faker');

const makeHuman = function(q){
    let humans = []
    for(let i=0; i<q; i++){
        humans.push({
            name: faker.person.fullName(),
            avatar: faker.internet.avatar(),
            company: faker.company.name(),
        })
    }
    console.log(JSON.stringify(humans))
}

makeHuman(2)