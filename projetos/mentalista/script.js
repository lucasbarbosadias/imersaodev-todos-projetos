var tentativas = 3
var numeroSecreto = Math.floor(Math.random() * 10 + 1)
//função math.random gera números aleatórios e a função math.floor transforma em INT

while ((tentativas > 0) && (chute != numeroSecreto)) {

  var chute = parseInt(prompt("Digite um número entre 1 e 10: "))
  
  if(chute == numeroSecreto){
    alert("Parabéns você acertou!!") 
  } else if (chute > numeroSecreto){
    alert("O número secreto é menor")
    tentativas = tentativas - 1
  } else {
    alert("O número secreto é maior")
    tentativas = tentativas - 1
  }
}
if(tentativas == 0){
  alert("Infelizmente você perdeu, o número secreto era: " + numeroSecreto)
}