const fetch = function(queryType, queryValue){
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function(data){
            if(data.totalItems){
                data.items.forEach(function(item){
                    console.log(item)

                    let isbn = item.volumeInfo.industryIdentifiers[0].identifier
                    let title = item.volumeInfo.title
                    let authors = ""

                    if(item.volumeInfo.hasOwnProperty("authors") ){
                        authors = " - by " + item.volumeInfo.authors.join()
                    }
                    
                    $("#result").append(`<p>${isbn} - ${title}${authors}</p>`)
                })
            } else {
                $("#result").append(`<p>nothing was found</p>`)
            }
        },
        error: function(xhr, text, error){
            console.log(text)
            $("#result").append(`<p>Received the error: ${text}</p>`)
        }
    })
}

$("button").on("click", function(){
    let queryType = $(this).data("querytype")
    let queryValue = $(`#${queryType}`).val()
    $("#result").empty();
    
    if(queryValue){
        fetch(queryType, queryValue)
    }
})
