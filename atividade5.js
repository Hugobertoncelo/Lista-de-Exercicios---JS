function verificarNumero() {
  let numero = prompt("Digite um número:");

  numero = Number(numero);

  if (isNaN(numero)) {
    alert("Por favor, digite um número válido.");
  } else {
    if (numero > 0) {
      alert("O número é positivo.");
    } else if (numero < 0) {
      alert("O número é negativo.");
    } else {
      alert("O número é zero.");
    }
  }
}