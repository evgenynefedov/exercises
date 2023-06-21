const SongsManager = function(){
    const _link = "https://www.youtube.com/watch?v="
    const _songs = {}

    const addSong = function(name, link){
        _songs[name] = link.replace(_link, "")
    }

    const getSong = function(name){
        if(_songs[name]){
            return _link + _songs[name]
        } else {
            return `the song "${name}" wasn't found`
        }
    }

    return {
        addSong: addSong,
        getSong: getSong
    }
}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

console.log(songsManager.getSong("ain't me"))

console.log(songsManager.getSong("saxxx"))