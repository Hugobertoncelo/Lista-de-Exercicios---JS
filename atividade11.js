const numero = parseInt(prompt("Digite um número:"));

if (numero >= 10 && numero <= 50) {
  if (numero % 2 === 0) {
    alert("O número está entre 10 e 50 e é par.");
  } else {
    alert("O número está entre 10 e 50, mas não é par.");
  }
} else {
  alert("O número não está entre 10 e 50.");
}