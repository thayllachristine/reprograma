//Para inserção de infos
const inputEmail = document.getElementById(`loginInputEmail`)
const inputPassword = document.getElementById(`loginInputPassword`)

const button = document.querySelector(`.login__button`)

button.addEventListener(`click`, function(event){
    event.preventDefault()
    
    inputEmail.value
    inputPassword.value

    const loginForm = document.querySelector(`.login__form`)
    loginForm.innerHTML = `Login efetuado com sucesso com o e-mail ${inputEmail.value}!`
})