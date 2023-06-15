const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const checkReservationButton = document.getElementById("checkreservation")
const outputBlock = document.getElementById("output")
const inputBlock = document.getElementById("guestname")

const checkReservation = function(guestname){
    let message = "Something went wrong, please contact to out support!"

    if(!guestname){
        message = "Please enter guest's name"
    } else if (!reservations[guestname]) {
        message = "There is no reservation for your name, but we have a free table. Welcome!"
        reservations[guestname] = { claimed: true };
    } else if (reservations[guestname].claimed) {
        message = "The reservation is already claimed"
    } else {
        message = "Welcome " + guestname + "!"
        reservations[guestname] = { claimed: true };
    }

    return message;
}

checkReservationButton.onclick = function(){
    outputBlock.innerHTML = checkReservation(inputBlock.value)
}