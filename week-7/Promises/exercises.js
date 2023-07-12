// -------------------------- API Manager ----------------------------------
class APIManager{
    constructor(){
        this.randromWordApiUrl = "https://random-word-api.herokuapp.com/word"
        this.googleBooksApiUrl = "https://www.googleapis.com/books/v1/volumes?"
        this.gifApiUrl = "https://api.giphy.com/v1/stickers/search?api_key=TfJcQtMMzlfbT4dz3AVffs9A9LWNs4DT&"
    }

    getRandomWord(){
        return $.get(this.randromWordApiUrl)
    }

    getBookWithWordInTitle(word){
        return $.get(`${this.googleBooksApiUrl}q=intitle:${word}`)
    }

    getGifByWord(word){
        return $.get(`${this.gifApiUrl}q=${word}`)
    }
}
// -------------------------- Render ----------------------------------
class Render{
    constructor(){
        this.wordContainer = $("#word")
        this.bookContainer = $("#books")
        this.frameForGif = $("#gifframe")
    }

    renderWord(word){
        this.wordContainer.text(word)
    }

    renderBooks(books){
        this.bookContainer.empty()
        if(books.totalItems){
            books.items.forEach(b => this.bookContainer.append(`<li>${b.volumeInfo.title}</li>`))
        } else {
            this.bookContainer.append(`<li>no books</li>`)
        }
    }

    renderGif(gif){
        this.frameForGif.attr("src", "")
        if(gif.length){
            this.frameForGif.attr("src", gif[0].embed_url)
        }
    }
}


// -------------------------- Controller ----------------------------------

const render = new Render

const apiManager = new APIManager

const restart = function(){

    let randomWordPromise = apiManager.getRandomWord()
    let word = ""
    
    randomWordPromise.then((words) => {
        word = words[0]
        let BooksPromise =  apiManager.getBookWithWordInTitle(word)
        let gifPromise = apiManager.getGifByWord(word)
        return Promise.all([BooksPromise, gifPromise])

    }).then((promiseResult) => {
        let [books, gif] = promiseResult
    
        render.renderWord(word)
        render.renderBooks(books)
        render.renderGif(gif.data)
    })
}

restart()