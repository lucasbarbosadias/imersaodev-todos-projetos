var n1 = parseInt(prompt("Digite o 1° número: "))
var op = parseInt(prompt("Digite o número referênte a operação desejada: 1.Soma - 2.Subtração - 3.Divisão - 4.Multiplicação"))
var n2 = parseInt(prompt("Digite o 2° número: "))

if (op == 1){
  var resultado = n1 + n2
  document.write("<h2>" + n1 + " + " + n2 + " = " + resultado + "</h2>")
} else if (op == 2){
  var resultado = n1 - n2
  document.write("<h2>" + n1 + " - " + n2 + " = " + resultado + "</h2>")
} else if (op == 3){
  var resultado = n1 / n2
  document.write("<h2>" + n1 + " / " + n2 + " = " + resultado + "</h2>")
} else if (op == 4){
  var resultado = n1 * n2
  document.write("<h2>" + n1 + " X " + n2 + " = " + resultado + "</h2>")
} else {
  document.write("<h2>Opção inválida!</h2>")
}