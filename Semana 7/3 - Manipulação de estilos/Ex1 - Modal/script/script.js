const firstScreen = document.querySelector(`.wrapper`)
const secondScreen = document.querySelector(`.login-modal`)

const loginButton = document.querySelector(`.login__button`)
loginButton.addEventListener(`click`, function (event) {
    event.preventDefault()

    firstScreen.style.display = `none`
    secondScreen.style.display = `flex`
})

const closeButton = document.querySelector(`.login-modal__button-close`)
closeButton.addEventListener(`click`, function (event) {
    event.preventDefault()

    firstScreen.style.display = `flex`
    secondScreen.style.display = `none`
})