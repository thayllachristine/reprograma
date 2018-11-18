const bgColor = document.querySelector(`h1`)
const contMain = document.querySelector(`main`)

window.addEventListener(`scroll`, function(){
    console.log(pageYOffset)
    
    if (pageYOffset >= 200) {
        contMain.style.marginTop = `125px`
        bgColor.style.backgroundPosition = `left -1000px`
        bgColor.style.height = `100px`

    } else {
        bgColor.style.backgroundPosition = `left -300px`
        bgColor.style.height = `300px`
    }    
})
