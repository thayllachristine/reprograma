// Bogo Sort : recebe uma lista e organiza utilizando esse método

function bogoSort(vetor) { //Declaração da função bogoSort + parâmetro (vetor)
	let contador = 0 //Definição do contador, que se inicia do zero
    //Para este caso, o contador se assemelhará com a quantidade de tentativas

	while (!isSorted(vetor)) { //Enquanto a função isSorted for "contrária"
		contador++ //Incremento do contador (contador = contador + 1)
		if (contador > 10000) //Se o contador for maior que 10.000
			throw "Interação demais! Antes que seu computador trave, tente novamente." //Alerta de algo que está errado

		for (let posicao = 0; posicao < vetor.length; posicao++){ //Para quando a posição inicial do vetor for 0, é verificado se ele é menor que o comprimento do vetor e irá incrementar (posicao = posicao + 1)
			const random_index = Math.floor(Math.random() * vetor.length) //Irá declarar uma constante denonimada random_index, a qual será retornada um número inteiro, de acordo com o número gerado na função Math.random()*comprimento do vetor
			const auxiliar = vetor[posicao] //Declaração de uma constante, para guardar o número referente a posição do vetor
			vetor[posicao] = vetor[random_index] //Verificação do número que está 'guardado' na posição e inclui na variável random_index
			vetor[random_index] = auxiliar //Verificação do número que está 'guardado' na random_inclur e inclui na aulixar
		
			//Quando a posição for maior que o comprimento do vetor, ele irá retornar para o if e verificar se o número de tentativas (contador) é maior que 10000.		
		}
				
	}

	return vetor
}


/*Observações: 
random_index : é uma variável que gera um número aleatório na index [posição do vetor]

Funções: 
- Math.floor : retorna um número inteiro
- Math.random : gera um número aleatório entre 0 e 1*/