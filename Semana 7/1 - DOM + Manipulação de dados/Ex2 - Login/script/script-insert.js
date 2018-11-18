//Para inserção acima dos inputs
const inputEmail = document.getElementById(`loginInputEmail`)
const inputPassword = document.getElementById(`loginInputPassword`)

const button = document.querySelector(`.login__button`)

button.addEventListener(`click`, function(event){
    event.preventDefault()

    const newTag = document.createElement(`span`)
    const newTagMsg = document.createTextNode(`Login efetuado com sucesso!`)

    newTag.appendChild(newTagMsg)
    const loginForm = document.querySelector(`.login__form`)

    loginForm.insertBefore(newTag, loginForm.childNodes[0])
})