$(document).ready(function(){
    $(".item").click(function(){
        let instock = $(this).data().instock
        if(instock){
            let item = $("#item-" + $(this).text())
            if(item.length){
                let quntity = parseInt($(item).children(".quantity").text().replace("x", ""))
                if(!quntity){
                    quntity = 1
                }
                quntity += 1
                $(item).children(".quantity").text(`x${quntity}`)
            } else {
                itemNew = `<div id="item-${$(this).text()}" class=cart-item><span class="name">${$(this).text()}</span><span class="quantity"></span><span class="remove">remove</span></div>`
                $("#cart").append(itemNew)
            }
        }
    })

    $("#cart").on("click", ".remove", function(){
        let quntity = parseInt($(this).parent().children(".quantity").text().replace("x", ""))
        if(!quntity){
            $(this).parent().remove()
        } else if(quntity > 2) {
            quntity -= 1
            $(this).parent().children(".quantity").text(`x${quntity}`)
        } else {
            $(this).parent().children(".quantity").text("")
        }
    })
})