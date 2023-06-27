$(document).ready(function(){
    $("#add").click(function(){
        let humanName = $("#name").val()
        if(humanName){
            $("#list").append(`<li>${humanName}</li>`)
        }
    })

    $("#list").on("click", "li", function(){
        $(this).remove()
    })
})