const STEP = 15

const field = document.getElementById("playing-field")
const arrowsField = document.getElementById("arrows")
const leftButton = document.getElementById("left")
const rightButton = document.getElementById("right")
const upButton = document.getElementById("up")
const downButton = document.getElementById("down")
const ball = document.getElementById("ball")

const maxLeftShift = field.clientWidth - ball.clientWidth
const maxTopShift = field.clientHeight- ball.clientHeight - arrowsField.clientHeight

const directions = {
    "left": {controlParam: "left", maxSize: 0, directionBoolean: -1},
    "right": {controlParam: "left", maxSize: maxLeftShift, directionBoolean: 1},
    "up": {controlParam: "top", maxSize: 0, directionBoolean: -1},
    "down": {controlParam: "top", maxSize: maxTopShift, directionBoolean: 1},
}

const moveBall = function (direction) {
    let newPosition = (parseInt(ball.style[directions[direction].controlParam]) || 0) + STEP*directions[direction].directionBoolean
    if(newPosition*directions[direction].directionBoolean < directions[direction].maxSize){
        ball.style[directions[direction].controlParam] = `${newPosition}px`
    }
}

leftButton.onclick = () => moveBall("left")
rightButton.onclick = () => moveBall("right")
upButton.onclick = () => moveBall("up")
downButton.onclick = () => moveBall("down")

addEventListener("keydown", function (e){
    switch(e.code){
        case "ArrowLeft":
            moveBall("left")
            break
        case "ArrowRight":
            moveBall("right")
            break
        case "ArrowUp":
            moveBall("up")
            break
        case "ArrowDown":
            moveBall("down")
            break
    }
});