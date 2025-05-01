function calcular() {
  let num1 = prompt("Digite o primeiro número:");
  let num2 = prompt("Digite o segundo número:");
  let operador = prompt("Digite o operador (+, -, *, /):");

  num1 = Number(num1);
  num2 = Number(num2);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, digite números válidos.");
    return;
  }

  let resultado;

  switch (operador) {
    case "+":
      resultado = num1 + num2;
      alert("Resultado: " + resultado);
      break;
    case "-":
      resultado = num1 - num2;
      alert("Resultado: " + resultado);
      break;
    case "*":
      resultado = num1 * num2;
      alert("Resultado: " + resultado);
      break;
    case "/":
      if (num2 === 0) {
        alert("Erro: divisão por zero!");
      } else {
        resultado = num1 / num2;
        alert("Resultado: " + resultado);
      }
      break;
    default:
      alert("Operador inválido! Use +, -, * ou /.");
  }
}