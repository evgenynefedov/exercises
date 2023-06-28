const model = Model()
const renderer = Renderer()

renderer.renderPosts(model.getPosts())

$("#sendpost").on("click", function(){
    userName = $("#user-name").val()
    userWishes = $("#user-wishes").val()

    if(userName != "" && userWishes != ""){
        model.addPost(userName, userWishes)
        renderer.renderPosts(model.getPosts())
        
        $("#user-name").val("")
        $("#user-wishes").val("")
    }
})


$("#posts").on("click", ".post", function(){
    postId = $(this).attr("id")
    model.removePost(postId)
    renderer.renderPosts(model.getPosts())
})