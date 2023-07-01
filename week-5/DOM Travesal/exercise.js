const generator = function(computerElement){
    let computer = {
        "processorId": computerElement.find("div.processor").attr("id"),
        "computerId": computerElement.data("id"),
        "busNumber": computerElement.find(".BUS").text()
    }

    return computer;
}

const validator = function(computerElement){
    let computer = generator(computerElement)
    computer["MB"] = computerElement.find(".MB").text()
    computer["QR"] = []
    computerElement.find(".QR").each(function(){
        computer["QR"].push($(this).text())
    })

    return computer
}

$("button.generator").on("click", function(){
    console.log(generator($(this).closest("div.computer")))
})

$("button.validator").on("click", function(){
    console.log(validator($(this).closest("div.computer")))
})