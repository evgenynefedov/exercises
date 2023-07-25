const moment = require('moment')

let timeNow = new Date()
console.log(timeNow)

let formattedTimeNow = moment().format("MMMM Do, YYYY")
console.log(formattedTimeNow) //January 3rd, 2017



const urllib = require('urllib')

// urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json').then(function(response){
//     console.log(response.data.toString())
// })

urllib.request('http://www.omdbapi.com/?apikey=8976ead1&t=Terminator').then(function(response){
    console.log(response.data.toString())
})