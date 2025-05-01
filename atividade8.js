const nome = prompt("Digite seu nome:");
const idade = parseInt(prompt("Digite sua idade:"));
const matriculado = prompt("Você está matriculado? (s/n):");

if (idade > 0 && matriculado.toLowerCase() === "s") {
  alert("Cadastro completo");
}