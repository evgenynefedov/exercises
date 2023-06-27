$(document).ready(function(){
    $("body").append("<div id='b1'></div>")
    $("body").append("<div id='b2'></div>")

    $("#b1").addClass("box1")
    $("#b2").addClass("box1")

    $("#my-input").val("Terabyte")

    let divWithData = $("#div-with-data")
    divWithData.html(
        "The item with barcode " + divWithData.data().barcode + " will expire on " + divWithData.data().expirationdate
    )
    
    $("#div-with-hover-event").hover(function(){
        $(this).addClass("blue-background")
        $(this).removeClass("yellow-background")
    }, function(){
        $(this).removeClass("blue-background")
        $(this).addClass("yellow-background")
    })

    $("button").click(function(){
        alert($("#my-input").val())
    })

    $("#b1").hover(function () {
        console.log($(this))
    })

    $(".box2").hover(function(){
        $(this).toggleClass("blue-background")
    })
})