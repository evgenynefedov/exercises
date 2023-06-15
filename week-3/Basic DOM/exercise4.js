const inputName = document.getElementById("name");
const inputSalary = document.getElementById("salary");
const inputBirthday = document.getElementById("birthday");
const inputPhone = document.getElementById("phone");
const inputSubmit = document.getElementById("submit");
const outputMessage = document.getElementById("message");

function validateForm(){
    let message = []
    
    let name = inputName.value.toString()
    let salary = inputSalary.value.toString()
    let birthday = inputBirthday.value
    let phone = inputPhone.value.toString()

    if(name.length < 2){
        message.push('Name must be longer than 2 characters')
    }
    if(salary < 10000 || salary > 16000){
        message.push('Salary must be between 10k and 16k')
    }
    if(birthday == ''){
        message.push('Birthday may not be null')
    }
    if(phone.length != 10){
        message.push('Phone must be 10 digits long')
    }

    return message;
}


submit.onclick = function(){
    let message = validateForm()
    outputMessage.innerHTML = message.join("<br/>");
}
