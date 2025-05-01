const nome = prompt("Digite o nome do aluno:");
const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));

const media = (nota1 + nota2) / 2;

if (media >= 6) {
  alert(nome + ", você foi aprovado! Sua média é: " + media);
} else {
  alert(nome + ", você não foi aprovado. Sua média é: " + media);
}