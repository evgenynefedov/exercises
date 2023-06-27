$(document).ready(function () {

    $(".feedme").on("click", function () {
        let divCopy = $(`<div class=feedme>${$(this).text()}</div>`)
        $("body").append(divCopy)
    })

    const names = [
        { first: "Alex", last: "Johnson" },
        { first: "Byron", last: "Loveall" },
        { first: "Cassandra", last: "Wuthers" },
        { first: "Deandre", last: "Rahm" },
        { first: "Ellena", last: "Freeman" }
    ]

    for (let name of names) {
        $("body").append(`<div>${name.first}-${name.last}</div>`)
    }

    $("#div-which-will-be-removed").hover(function () {
        $(this).remove()
    })

    $("#post").click(function () {
        let div = `<div class="blog">Some text</div>`
        $("#blogs").append(div)
    })

    $("#blogs").on("click", ".blog", function () {
        $(this).text("blargh")
    })
})