/*
console.log("Hello, world!")
let country = "Djibouti"
let mysteriousCountry //not initialized, only defined

let userResponse

//console.log(userResponse) // prints undefined
//console.log(userName) // throws an error
//console.log(userResponse) // prints undefined

const firstString = "car"
const secondString = "pet"
let bothStrings = ""

bothStrings += firstString 
bothStrings += secondString

console.log(bothStrings)

let num
console.log(3 + num)

let startPosition
let newPosition = (startPosition || 0) + 10

console.log(newPosition) //prints 10

console.log((5 > 2) && false);
*/


//exercise 1 ------------------------------------------------------------
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (!boughtTesla) {
    console.log("Are you interested in buying Tesla car?");
} else if (!isUSCitizen) {
    console.log("Would like to move to the US?");
} else if (currentYear - yearOfTeslaPurchase >= 4) {
    console.log("Would you like upgrade your car?");
} else {
    console.log("Are you satified with your car?");
}


//exercise 2 ------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//delete the second and third elements
numbers.splice(1, 2)
//change the fourth element to 1
numbers[3] = 1
//delete the last 4 elements
numbers.splice(numbers.length - 4, 4)
//add another element 0 to the beginning of the array
numbers.splice(0, 0, 0)
//print the modified array
console.log(numbers)


//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//numbers[20] = 0
//numbers.splice(1,20)
//console.log(numbers)


//exercise 3.1 ------------------------------------------------------------
let p1 = {
    name: "Jill",
    age: 30,
    city: "Tel Aviv"
}

let p2 = {
    name: "Robert",
    age: 30,
    city: "Haifa"
}

if (p1.city != p2.city) {
    console.log("Jill wanted to date Robert, but couldn’t");
} else if (p1.age == p2.age) {
    console.log("Jill wanted to date Robert");
}

//exercise 3.2 ------------------------------------------------------------
let library = {
    books: [
        { title: "book1", author: "autor1" },
        { title: "book2", author: "autor2" }
    ]
}
console.log(library.books[0], library.books[1]);

//exercise 3.3 ------------------------------------------------------------
const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}

const name = prompt('Please enter the name for your reservation').toLowerCase();

if (!reservations[name]) {
    console.log("There is no reservation for your name, but we have a free table. We add your reservation!");
    reservations[name] = { claimed: true };
} else if (reservations[name].claimed) {
    console.log("The reservation is already claimed");
} else {
    console.log("Welcome " + name + "!");
}

//exercise 4.1
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let nameIndex in names) {
    people[nameIndex] = {
        name: names[nameIndex],
        age: ages[nameIndex]
    }
}
//console.log(people);

//exercise 4.2 ------------------------------------------------------------
for (person of people) {
    console.log(person.name + " is " + person.age + " years old");
}

//exercies 4.2 ------------------------------------------------------------
const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" }
]

for (let postIndex in posts) {
    if (posts[postIndex].text.toLowerCase().search("don't buy") != -1) {
        posts.splice(postIndex, 1);
    }
}
console.log(posts);

//exercise 4.3 ------------------------------------------------------------
const posts = [
    {
        id: 1,
        text: "Love this product",
        comments: []
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [
            { id: 1, text: "Idiot has no idea" },
            { id: 2, text: "Fool!" },
            { id: 3, text: "I agree!" }
        ]
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]

/*You are given 2 as the ID of a post. 
Write some code that finds the comment with an ID of 3 
(inside of a post with an ID of 2), 
and remove just that one comment.*/
var PostId = 2
var CommentId = 3

for (post of posts) {
    if (post.id == PostId) {
        for (let commentIndex in post.comments) {
            if (post.comments[commentIndex].id == CommentId) {
                post.comments.splice(commentIndex, 1)
            }
        }
    }
}
console.log(posts)

//exercise 4.4 ------------------------------------------------------------
const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
}

for (letter of Object.keys(dictionary)) {
    console.log("Words that begin with " + letter + ":")
    for (word of dictionary[letter]) {
        console.log("   " + word)
    }
}

