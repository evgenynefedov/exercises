const boxElement = document.getElementById("box1")
const container = document.getElementById("container")
const buttonGenerator = document.getElementById("buttonGenerator")

const changeColor = function(element){
    let color = Math.floor(Math.random()*16777215).toString(16)
    element.style.backgroundColor= `#${color}`
}

const generate99Boxes = function(){
    for(let i=0; i < 99; i++){
        let newBoxElement = boxElement.cloneNode()
        newBoxElement.onmouseover = function(){
            changeColor(this)
        }
        container.appendChild(newBoxElement)
    }
    buttonGenerator.value = "Clear field"
    buttonGenerator.onclick = clearField
}

const clearField = function(){
    container.innerHTML = ""
    container.appendChild(boxElement)
    buttonGenerator.value = "Generete new boxes"
    buttonGenerator.onclick = generate99Boxes
}

boxElement.onmouseover = function(){
    changeColor(this)
}
buttonGenerator.onclick = generate99Boxes
