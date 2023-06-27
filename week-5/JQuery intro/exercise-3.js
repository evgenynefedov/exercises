$(document).ready(function(){
    let box = "<div class='box'></div>"
    
    $("body").append(box)
    $("body").append(box)

    $(".box").css("border-radius", "10px")
    $(".box").css("box-shadow", "2px 2px 3px 0px gray")

    $(".box").hover(function(){
        $(this).toggleClass("red")
    })
})