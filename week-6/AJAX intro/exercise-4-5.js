const APIKEY = "TfJcQtMMzlfbT4dz3AVffs9A9LWNs4DT"
const GIFURL = "https://api.giphy.com/v1/gifs/search"

const iframe = $("#iframe")

const activeForm = function(activeBoolean){
    $("#query").prop('disabled', activeBoolean)
    $("#search").prop('disabled', activeBoolean)
    if(activeBoolean){
        $("#status").text("we are searching, pleas wait...")
    } else {
        $("#status").text("")
    }
    
}

const search = function(query){
    $.ajax({
        method: "GET",
        url: `${GIFURL}?api_key=${APIKEY}&q=${query}`,
        success: function(data){
            console.log(data)
            let src = data.data[0].embed_url
            iframe.attr("src", src)
            activeForm(false)
        },
        error: function(xhr, text, error){
            activeForm(false)
        }
    })
}

$("#search").on("click", function(){
    queryInput = $("#query").val()
    
    if(queryInput){
        activeForm(true)
        search(queryInput)
    }
})