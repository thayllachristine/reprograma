//Gera um número aleatório
const objetivo = getRandomInt (999)
const form = document.querySelector(".game")
const input = document.querySelector(".game input")

let tentativas = 0


form.addEventListener("submit", event => {
    event.preventDefault()

    tentativas = tentativas + 1

    const chute = input.value 

    input.value = ""


    if (chute == objetivo) {
        form.style.display = "none"

        const resultado = document.querySelector(".result")
        const resultado_p = document.querySelector("result p")

        resultado.style.display = "flex"
        resultado_p.innerHTML = `
            ${objetivo}, 
            número de tentativas: ${tentativas}`
    
    } else if (chute > objetivo) {
        const dica = document.querySelector(".game p")

        dica.style.opacity = 1
        dica.innerHTML = "Oops, o número correto é menor que esse..."

        setTimeout(function () {
            dica.style.opacity = 0
            dica.style.fontSize = "70px"
            }, 1000)

    } else if (chute < objetivo) {
        const dica = document.querySelector(".game p")

        dica.style.opacity = 1
        dica.innerHTML //?
    }
})