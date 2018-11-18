const menuGeneral = document.querySelector(`.sidebar-menu`)

const menuButton = document.querySelector(`.sidebar-menu__button`)

menuButton.addEventListener(`click`, function (event) {
    event.preventDefault()

    // if (menuGeneral.style.left === `-34%`){ 
    //     menuGeneral.style.left = `0%`
    // } else {
    //     menuGeneral.style.left = `-34%`
    // }

    let verifyPosition = (menuGeneral.style.left)

    if (verifyPosition === `-430px`) {
        menuGeneral.style.left = `0px`
        console.log(`1 : verifyPosition = -0px`)
    } else {
        menuGeneral.style.left = `-430px`
        console.log(`2 : verifyPosition = -430px`)
    }
})