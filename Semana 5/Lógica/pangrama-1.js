/*Exercício 2 - Pangrama
Cenário: É dada uma frase e a pessoa precisa identificar se é ou não um pangrama.*/


function checadorPangrama(frase) {
    const alfabeto = 'abcdefghijklmnopqrstwuvxyz'
    
    frase = frase.toLowerCase()
    
    for (var letra  of alfabeto){
      if (frase.indexOf(letra === -1)) {
        return "não"
      }
    }
    return "sim"
  }