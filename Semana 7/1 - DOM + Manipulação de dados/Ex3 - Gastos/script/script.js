/* Gastos :
1 - Pegar o botão
2 - Pegar a tabela
3 - Adicionar uma linha
4 - Adicionar colunas
5 - Cria um texto
6 - Insere o texto na coluna
7 - Insere a coluna
8 - Insere a linha na tabela */


const buttonTransaction = document.querySelector(`.transacao__button`)

buttonTransaction.addEventListener(`click`, function(event){
    event.preventDefault()

    //Selecionar tabela
    const tableExtract = document.querySelector(`.extrato__table`)

    //Criar linha
    const addLinha = document.createElement(`tr`)

    //Criar colunas
    const addColunaNome = document.createElement(`td`)
    const addColunaValor = document.createElement(`td`)
    const addColunaData = document.createElement(`td`)

    //Inserir textos no input
    const inputTextNome = document.getElementById(`transacaoInputName`).value
    const inputTextValor = document.getElementById(`transacaoInputMoney`).value 
    const inputTextData = document.getElementById(`transacaoInputDate`).value

    //Verificar as informações dos nós text que foram inseridas no input
    const nodeTextNome = document.createTextNode(inputTextNome)
    const nodeTextValor = document.createTextNode(inputTextValor)
    const nodeTextData = document.createTextNode(inputTextData)
    
    //Inserir textos do nó dentro da coluna
    addColunaNome.appendChild(nodeTextNome)
    addColunaValor.appendChild(nodeTextValor)
    addColunaData.appendChild(nodeTextData)

    //Inserir coluna na linha
    addLinha.appendChild(addColunaNome)
    addLinha.appendChild(addColunaValor) 
    addLinha.appendChild(addColunaData)

    //Inserir linha na tabela
    tableExtract.appendChild(addLinha)
})