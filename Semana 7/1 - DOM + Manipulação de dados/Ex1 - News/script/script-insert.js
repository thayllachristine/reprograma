//Para inserção acima dos inputs
const inputEmail = document.getElementById(`newsInputEmail`)
const button = document.querySelector(`.news__button`)

button.addEventListener(`click`, function(event) {
    event.preventDefault()
    
    //createElement : criar novo elemento    
    const resposta = document.createElement(`span`)

    //createTextNode : cria nós de texto
    const respostaMensagem = document.createTextNode(`E-mail cadastrado com sucesso!`)

    //appendChild : insere item dentro de um elemento
    resposta.appendChild(respostaMensagem)
    
    const newsForm = document.querySelector(`.news__form`)

    //insertBefore : insere item em um elemento antes de um item estabelecido
    newsForm.insertBefore(resposta, newsForm.childNodes[0])
})