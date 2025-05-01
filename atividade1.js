function compararNumeros() {
  let numero1 = prompt("Digite o primeiro número:");
  let numero2 = prompt("Digite o segundo número:");

  numero1 = Number(numero1);
  numero2 = Number(numero2);

  if (numero1 > numero2) {
    alert("O maior número é: " + numero1);
  } else if (numero2 > numero1) {
    alert("O maior número é: " + numero2);
  } else {
    alert("Os dois números são iguais.");
  }
}