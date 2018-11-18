//Para exibição de alert()
const inputEmail = document.getElementById(`newsInputEmail`)
const button = document.querySelector(`.news__button`)

button.addEventListener(`click`, function(event) {
    event.preventDefault()
    
    const email = inputEmail.value
    alert(`O e-mail ${email} foi cadastrado com sucesso!`)

    const infoCadastro = document.querySelector(`.news__form`)
    infoCadastro.innerHTML = `O e-mail ${email} foi cadastrado com sucesso!`
})