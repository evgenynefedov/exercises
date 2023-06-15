const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

const changeColor = function () {
    box.style.backgroundColor = "#8e44ad"
}

const addItem = function () {
    let newItem = document.createElement("div")
    newItem.innerHTML = "New item"

    document.getElementById("container1").appendChild(newItem)
}

const clickme = document.getElementById("clickme")
clickme.onclick = function () {
    clickme.innerHTML = "clicked"
}

