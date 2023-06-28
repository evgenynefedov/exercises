const Model = function(){
    let _posts = [
        {
            id: "p1",
            name: "Nir", 
            text: "Post about the true approach to build app - MVC architecture"
        }
    ]
    
    let _postIndex = 2

    const getPosts = function(){
        return [..._posts]
    }

    const addPost = function(userName, userWishes){
        _posts.push({
           id: "p" + _postIndex, 
           name: userName, 
           text: userWishes
        })
        _postIndex += 1
    }

    const removePost = function(postId){
        postIndex = _posts.findIndex(post => post.id == postId)
        _posts.splice(postIndex, 1)
        console.log(postIndex)
    }

    return {
        getPosts,
        addPost,
        removePost
    }
}