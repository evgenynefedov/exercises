// ------------------------------spotcheck 1-------------------------------------
const classData = {
    classmates: [
        { name: "That on gal", description: "Always has the ansswer" },
        { name: "The weird dude", description: "Quick with a smile" },
        { name: "Taylor", description: "Just Taylor" }
    ]
}

const source1 = $("#class-template").html()
const template1 = Handlebars.compile(source1)
const newHTML1 = template1(classData)

$("#spotcheck-container-1").append(newHTML1)


// ------------------------------spotcheck 2-------------------------------------
const menuData = {
    menu: [
        { name: "Google", link: "http://google.com", socialNetwork: false },
        { name: "Facebook", link: "http://facebook.com", socialNetwork: true },
        { name: "Instagram", link: "http://nstagram.com", socialNetwork: false },
        { name: "Twitter", link: "http://twitter.com", socialNetwork: false },
    ]
}

const source2 = $("#menu-template").html()
const template2 = Handlebars.compile(source2)
const newHTML2= template2(menuData)

$("#spotcheck-container-2").append(newHTML2)



// ------------------------------spotcheck 3-------------------------------------
const companiesData = {
    companies: [
        { name: "Checkpoint", availableJobs:["FullStack Team Leader Cloud Security", "Threat Prevention Cloud Team Leader", "Technical Customer Success Expert"], isParticipant: true },
        { name: "CYE", availableJobs:["Software engineer (Backend- Python)", "Software architect", "Red team expert"], isParticipant: false },
        { name: "BeamUP", availableJobs:["Customer Success Team Lead", "Data Specialist", "Product Manager"], isParticipant: true },
    ]
}

const source3 = $("#companies-template").html()
const template3 = Handlebars.compile(source3)
const newHTML3= template3(companiesData)

$("#spotcheck-container-3").append(newHTML3)


// ------------------------------spotcheck 3-------------------------------------

const animalsArr = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languagesArr = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const render = function(templateName, data){
    let source = $(`#${templateName}-template`).html()
    let template = Handlebars.compile(source)
    let newHTML = template(data)
    $("#spotcheck-container-4").append(newHTML)
}

render("animals", {animals: animalsArr})
render("languages", {languages: languagesArr})