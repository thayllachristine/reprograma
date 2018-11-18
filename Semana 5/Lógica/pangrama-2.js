/*Exercício 2 - Pangrama
Cenário: É dada uma frase e a pessoa precisa identificar se é ou não um pangrama.*/


function checadorPangrama(frase) {
    frase = frase
      .toLowerCase()
      .split(" ") //separa em espaços
      .join("")
      .split("") //separa em listas
      
      frase = frase.filter(function(item, pos){
      return frase.indexOf(item) == pos 
    })
    
    if (frase.length < 26) {
      return "não"
    } 
    
    return "sim"
      
  }