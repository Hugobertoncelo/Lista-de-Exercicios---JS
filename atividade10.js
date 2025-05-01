const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));
const num3 = parseFloat(prompt("Digite o terceiro número:"));

let maior;

if (num1 >= num2 && num1 >= num3) {
  maior = num1;
} else if (num2 >= num1 && num2 >= num3) {
  maior = num2;
} else {
  maior = num3;
}

alert("O maior número é: " + maior);