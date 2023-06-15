//console.log(document)
//const playingField = document.getElementById("playing-field")

const leftButton = document.getElementById("left")
const rightButton = document.getElementById("right")
const upButton = document.getElementById("up")
const downButton = document.getElementById("down")
const ball = document.getElementById("ball")

const moveLeft = function () {
    ball.style.left = `${((parseInt(ball.style.left) || 0) - 15)}px`;
}
const moveRight = function () {
    ball.style.left = `${((parseInt(ball.style.left) || 0) + 15)}px`;
}
const moveUp = function () {
    ball.style.top = `${((parseInt(ball.style.top) || 0) - 15)}px`;
}
const moveDown = function () {
    ball.style.top = `${((parseInt(ball.style.top) || 0) + 15)}px`;
}

leftButton.onclick = moveLeft
rightButton.onclick = moveRight
upButton.onclick = moveUp
downButton.onclick = moveDown

addEventListener("keydown", function (e){
    switch(e.code){
        case "ArrowLeft":
            moveLeft()
            break
        case "ArrowRight":
            moveRight()
            break
        case "ArrowUp":
            moveUp()
            break
        case "ArrowDown":
            moveDown()
            break
    }
});