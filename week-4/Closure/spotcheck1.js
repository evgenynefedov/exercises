const family = function(){
    let members = []

    const birth = function(name){
        members.push(name)
        console.log(members)
    }

    return birth
}

giveBirth = family()
giveBirth("Ameer")
giveBirth("Neer")