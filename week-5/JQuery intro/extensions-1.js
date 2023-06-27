$(document).ready(function(){
    $("#colors span").each(function(){
        $(this).addClass("picker")
        $(this).css("background-color", $(this).data().color)

        $(this).click(() => $(".box").css("background-color", $(this).data().color))
    })
})