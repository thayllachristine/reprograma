/*Exercício 1 - Palíndromo
Cenário: Durante uma conversa com alguém, você pensa em uma palavra e pergunta para a pessoa se essa palavra é um palíndromo.*/


function checkPalindromo (palavra) {
    // Lista > Reverte > Junta
    var palavraRevertida = palavra.split("").reverse().join("")
    
    if (palavra == palavraRevertida)
      return "Sim"
      return "Não"
  }  