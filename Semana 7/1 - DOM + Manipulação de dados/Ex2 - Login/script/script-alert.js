//Para exibição de alert()
const inputEmail = document.getElementById(`loginInputEmail`)
const inputPassword = document.getElementById(`loginInputPassword`)

const button = document.querySelector(`.login__button`)

button.addEventListener(`click`, function(event){
    event.preventDefault()
    
    inputEmail.value
    inputPassword.value

    alert(`Login efetuado com sucesso com o e-mail ${inputEmail.value}!`)
})