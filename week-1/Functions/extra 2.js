const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

const getUniqueWordsQuntity = function (text){
    let uniqueWordsQuntity
    let wordsFromText
    let uniqueWordsWithQuntity

    wordsFromText = getWordsFromText(text)
    uniqueWordsWithQuntity = getUniqueArrayElemntsWithQuantity(wordsFromText)
    uniqueWordsQuntity = getQuantityofValuesEquelOne(uniqueWordsWithQuntity)
    
    console.log(uniqueWordsWithQuntity)
    console.log(uniqueWordsQuntity)
}

const getWordsFromText = function (text){
    let wordsFromText = []

    let cleaningTextRegExp = "(?:"
    for(specialChar of specialChars){
        cleaningTextRegExp += '\\' + specialChar + '|'
    }
    cleaningTextRegExp += ' )+'
    cleaningTextRegExp = new RegExp(cleaningTextRegExp)
    wordsFromText = text.split(cleaningTextRegExp) 
    return wordsFromText
}

const getUniqueArrayElemntsWithQuantity = function (inputArray){
    let uniqueWordsWithQuntity = {}
    let lowerCaseWord

    for(wordFromText of inputArray){
        lowerCaseWord = wordFromText.toLowerCase()
        //if(uniqueWordsWithQuntity.hasOwnProperty(lowerCaseWord)){
        if(uniqueWordsWithQuntity[lowerCaseWord]){
        
            uniqueWordsWithQuntity[lowerCaseWord] += 1
        } else {
            uniqueWordsWithQuntity[lowerCaseWord] = 1
        }
    }
    return uniqueWordsWithQuntity    
}

const getQuantityofValuesEquelOne = function(inputArray){
    let uniqueWordsQuntity = 0

    for(let word in inputArray){
        if(word != '' && inputArray[word] == 1){
            uniqueWordsQuntity += 1
        }
    }

    return uniqueWordsQuntity
}

console.log(getUniqueWordsQuntity(story))

/* how I checked the true method for asking about exstance KEY in ARRAY :) 
let someArray = {}
if(someArray["with"]){
    console.log("Method 1(just asking inside brackets): there is some 'with' in Array")
} 
if(someArray.includes("with")){
    console.log("Method 2('includes()' function): there is some 'with' in Array")
} 
if("with" in someArray){
    console.log("Method 3(Operator 'in'): there is some 'with' in Array")
} 
if(someArray.hasOwnProperty("with")){
    console.log("Method 4('hasOwnProperty' method): there is some 'with' in Array")
}
*/