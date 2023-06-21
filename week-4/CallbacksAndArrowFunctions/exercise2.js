
const getTime = functionName => functionName(new Date())

const returnTime = function (time) {
    alert('The current time is: ' + time)
}

getTime(returnTime)