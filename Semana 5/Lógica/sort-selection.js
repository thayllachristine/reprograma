/* Selection Sort : recebe uma lista e os organiza */

function selectionSort(lista) {
    let listaOrdenada = [] //Declaração de uma lista vazia, que será utilizada posteriormente

    while (lista.length > 0) { //Enquanto o comprimento da lista for maior que zero
        let maisBaixo = Infinity //Declaração de uma variável que guarda um número infinito, que é o maior valor no JS
        let maisBaixo_posicao //Declaração de uma variável para a posição do número mais baixo

        for (const [posicao, itemLista] of lista.entries()) { //Para: uma posição e um item da lista de acordo com as entradas listadas
            if (itemLista < maisBaixo) { //Se o item da lista for menor que o mais baixo (lembrando que maisBaixo = Infinity)
                maisBaixo = itemLista //O número mais baixo guarda o item da lista
                maisBaixo_posicao = posicao //A posição mais baixa guarda a posição do item da lista
            }
        }

        listaOrdenada.push(maisBaixo) //Ele "guarda" o número mais baixo, que será usado posteriormente
        lista.splice(maisBaixo_posicao, 1) //Cria uma nova lista excluindo o item mais baixo. 
    }

    return listaVazia //
}



/*
= "Guardar"
== "Compara sem comparar o tipo"
=== "Compara e compara o tipo"

Funções: 
- entries() : entrada
- push() :
- splice() :
*/