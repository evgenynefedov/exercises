const Renderer = function(){
    function renderPosts(posts){
        postsArea = $("#posts")
        postsArea.html("")

        for (let post of posts){
            let postHtml = `<div id="${post.id}" class="post"><b>${post.name}: </b><span>${post.text}</span></div>`
            postsArea.append(postHtml)
        }
    }

    return {
        renderPosts
    }
}