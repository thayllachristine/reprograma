const btIncSize = document.querySelector(`.button-increase_size`)
const btDecSize = document.querySelector(`.button-decrease_size`)

let size = 16

btIncSize.addEventListener(`click`, function (event) {
    event.preventDefault()
    size = size + 4
    document.querySelector(`body`).style.fontSize = `${size}px`
})


btDecSize.addEventListener(`click`, function (event) {
    event.preventDefault()
    size = size - 4
    document.querySelector(`body`).style.fontSize = `${size}px`
})


// for (incSize = 16; incSize < 100; incSize = incSize + 4){
//     document.querySelector(`body`).style.fontSize = `${incSize}px`
//     console.log(`${incSize}px`)
// }
