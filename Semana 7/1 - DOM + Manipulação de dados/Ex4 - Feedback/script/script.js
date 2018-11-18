const buttonFeed = document.querySelector(`.feedback__button`)

buttonFeed.addEventListener(`click`, function(event){
    event.preventDefault()

    //Criar linha : <hr>
    const addLine = document.createElement(`hr`)

    //Acessar depoimentos
    const testArea = document.querySelector(`.testimonials`) 

    //Definir valor no input
    const inputMsg = document.getElementById(`feedbackInputMessage`).value

    //Acessar o valor que foi definido ao nó
    const nodeMsg = document.createTextNode(inputMsg)
    
    //Insere o valor do nó após os depoimentos
    testArea.appendChild(nodeMsg)
    testArea.appendChild(addLine)
})