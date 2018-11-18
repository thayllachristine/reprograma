/*Desafio 2: 
Cada número do triângulo de Pascal é igual à soma do número imediatamente acima e do antecessor do número de cima.*/

//Função: Criação de uma nova linha
function novaLinha(linha) {
    //Declaração 'proxLinha' + add '1' na 1ª posição da lista
    let proxLinha = [1]

    /*Para adicionar o próximo elemento/linha*/
    for (let i = 1; i < linha.length; i++) {
        proxLinha.push(linha[i] + linha[i - 1])
    }

    //Adicionar o num '1' na última posição
    proxLinha.push(1)

    return proxLinha
}

//Função: Criação para listar Triângulo de Pascal
function trianguloPascal(numLinhas) {
    if (numLinhas < 1) {
        throw "O triângulo deve ter pelo menos uma linha!"
    }

    //Primeira linha do triângulo
    let triangulo = [[1]]

    for (let i = 1; i < numLinhas; i++) {
        triangulo.push(novaLinha(triangulo[triangulo.length - 1]))

        /*
        push -> coloca um elemento no final de uma linha
        novaLinha -> cria uma nova linha do triangulo, beseada na linha anterior
        triangulo[triangulo.length - 1] -> pega a ultima linha do triangulo */

    }
}