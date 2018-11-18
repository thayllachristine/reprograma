//Para inserção de infos
const inputEmail = document.getElementById(`newsInputEmail`)
const button = document.querySelector(`.news__button`)

button.addEventListener(`click`, function(event) {
    event.preventDefault()
    
    const email = inputEmail.value

    const infoCadastro = document.querySelector(`.news__form`)
    infoCadastro.innerHTML = `O e-mail ${email} foi cadastrado com sucesso!`
})