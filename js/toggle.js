let addPerson = isMenuOut = toggleThemes = toggleQueue = toggleLanguage = true

function changeAddPerson() {
    if (toggleThemes && toggleQueue && toggleLanguage) {
        $('#invite').css('display', addPerson ? 'block' : 'none')
        addPerson = !addPerson
    }
}

function toggleMenu() {
    $('#menu').toggleClass("menuOut");
    $('#menu').toggleClass("menuIn");
}

function changeToggleThemes() {
    if (addPerson && toggleQueue && toggleLanguage) {
        $('#themes').css('display', toggleThemes ? 'block' : 'none')
        toggleThemes = !toggleThemes
    }
}

function changeToggleQueue() {
    if (addPerson && toggleThemes && toggleLanguage) {
        $('#addToQueue').css('display', toggleQueue ? 'block' : 'none')
        toggleQueue = !toggleQueue
    }
}

function changeToggleLanguage() {
    if (toggleThemes && toggleQueue && addPerson) {
        $('#language').css('display', toggleLanguage ? 'block' : 'none')
        toggleLanguage = !toggleLanguage
    }
}

function addSong() {
    link = $("#queueLink").val()
    $("#queue").append("<p>" + link + "</p>")
    $('#addToQueue').css('display', 'none')
    $("#queueLink").val("")
    toggleQueue = !toggleQueue
}