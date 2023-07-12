// ------------------------ Spot Check 1 --------------------------
let vegetables = [
    { name: "Eggplant", color: "purple" },
    { name: "Carrot", color: "orange" },
    { name: "Squash", color: "orange" },
    { name: "Tomatoe", color: "red" },
    { name: "Onion", color: "white" },
    { name: "Sweet Potato", color: "orange" }]

let orangeVegetables = vegetables.filter(v => v.color == "orange")
console.log(orangeVegetables)

// ------------------------ Spot Check 2 --------------------------
let people = [
    { salary: 1300, goodPerformance: false },
    { salary: 1500, goodPerformance: true },
    { salary: 1200, goodPerformance: true },
    { salary: 1700, goodPerformance: false },
    { salary: 1600, goodPerformance: true },
]

const promote = function(p){
    if(p.goodPerformance){
        p.salary += 300
    }
}

people.forEach(promote)
console.log(people)
//people.forEach(p => console.log(p.salary)) //should print 1300, 1800, 1500, 1700, 1900 (on separate lines)

// ------------------------ Spot Check 3 --------------------------
let posts = [
    {
        id: 0, text: "I'm not here",
        comments: [{ id: 0, text: "support that" }]
    },
    {
        id: 1, text: "Find me",
        comments: [
            { id: 0, text: "here I am" },
            { id: 1, text: "rock you like a hurricane" },
            { id: 2, text: "dum dum" }]
    },
    {
        id: 2, text: "Where's waldo anyway",
        comments: [
            { id: 0, text: "who's waldo" },
            { id: 1, text: "he's called Effi" }]
    },
    {
        id: 3, text: "Poof",
        comments: [{ id: 0, text: "like magic" }]
    }
]

const findCommentByID = (pId,cId) => posts.find(p => p.id == pId).comments.find(c => c.id == cId)
console.log(findCommentByID(1, 0))

// ------------------------ Spot Check 4 --------------------------
let movies = [
    { title: "Dareangel", studio: "Marvel", year: 2023 },
    { title: "Batterfly", studio: "Fox", year: 2021 },
    { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
    { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
]

if(movies.some(m => m.studio == "Marvel")){
    console.log("Let’s go watch some movies")
} else {
    console.log("Let’s stay home")
}

if(movies.every(m => m.year > 2022)){
    console.log("Futuristic stuff")
} else {
    console.log("Yawn")
}
