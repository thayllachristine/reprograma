const clickButton = document.getElementById(`arrowTop`)

clickButton.addEventListener(`click`, function(){
    window.scrollTo(pageYOffset, 0)
})


window.addEventListener(`scroll`, function(){
    console.log(pageYOffset)
    console.log(clickButton.hidden)

    if (pageYOffset > 450) {
        clickButton.hidden = false
    } else {
        clickButton.hidden = true
    }

})

/* 
    if (pageYOffset > 450) {
        clickButton.hidden = false
        return false
    } 
    clickButton.hidden = true
*/