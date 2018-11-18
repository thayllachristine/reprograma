/*Desafio 1 - Shuffle Perfeito
Um shuffle perfeito (ou faro / weave shuffle) significa dividir um baralho de cartas em metades iguais e intercalá-las perfeitamente - para que você termine com a primeira carta da metade esquerda, seguida pela primeira carta da metade direita, e em breve quando você executa repetidamente shuffles perfeitos em um baralho de cartas exclusivas de tamanho uniforme ele retornará à sua ordem original. Quantos shuffles isso leva, depende apenas do número de cards no baralho.*/

function vetoresIguais(num1, num2) {
    if (num1 == num2) {
        return true
    }

    if (num1.length !== num2.length) {
        return false
    }

    if (num1 == null || num2 == null) {
        return false
    }

    for (let i = 0; i < num1.length; i++) {
        if (num1[i] !== num2[i]) {
            return false
        }
    }

    return true
}



function shufflePerfeito(lista) {
    if (lista.length % 2 !== 0) {
        throw "A lista deve ter um número par de elementos"
    }

    const metade = lista.length / 2

    let esquerda = lista.slice(0, metade)
    let direita = lista.slice(metade, lista.length)

    //declaração da variável para embaralhar lista
    let embaralhada = []

    while (vetoresIguais(lista, embaralhada) === false) {
        //para encher/esvaziar a lista 
        embaralhada = []

        for (let i = 0; i < metade; i++) {
            embaralhada.push(esquerda[i], direita[i])
        }

        esquerda = embaralhada.slice(0, metade)
        direita = embaralhada.slice(metade, lista.length)

    }

}