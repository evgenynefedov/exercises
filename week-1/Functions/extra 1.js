people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]

const capitalize = function (str) {
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase()
    capitalizedStr += str.slice(1)
    return capitalizedStr
}

const getAge = function (age) {
    if (age < 21) {
        return "underage"
    } else if (age > 55) {
        return "55+"
    }
    return age
}

const getProfession = function (profession) {
    capitalizedProfession = ""
    let separatedWords = profession.split(" ")
    for(word of separatedWords){
        capitalizedProfession += " " + capitalize(word)
    }
    capitalizedProfession = capitalizedProfession.trimStart()
    return capitalizedProfession
}

const getCatchphrase = function(personName, personCatchphrase){
    let catchphrase = capitalize(personName) + " loves to say "
    catchphrase += `"` + personCatchphrase[0].toUpperCase()
    catchphrase += personCatchphrase.slice(1) + `"`
    return catchphrase
}

const getSummary = function (person) {
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} `
    summary += getProfession(person.profession) //call function for profession
    summary += ` from ${capitalize(person.city)}, ${capitalize(person.country)}. `
    summary += getCatchphrase(person.name, person.catchphrase)
    return summary
}

for (person of people_info){
    console.log(getSummary(person))
}


