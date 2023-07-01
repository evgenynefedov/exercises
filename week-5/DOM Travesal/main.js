$(".remove").on("click", function () {
    alert($(this).closest(".post").data().id)
})


$('button.submit-data').on('click', function () {
    let relevantInputValue = $(this).closest("div").find("input").val()
    alert(relevantInputValue)
})

$("button.checkpoint1").on("click", function (){
    $(this).parent().children("span").html("Yeap yeap yeap")
})

$("button.checkpoint2").on("click", function(){
    console.log($(".container").find("p").text())
})