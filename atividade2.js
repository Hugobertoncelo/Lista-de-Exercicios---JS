function verificarIdade() {
  let idade = prompt("Digite sua idade:");

  idade = Number(idade);

  if (isNaN(idade) || idade < 0) {
    alert("Por favor, digite uma idade válida.");
    return;
  }

  if (idade >= 16) {
    alert("Você pode votar.");
  } else {
    alert("Você ainda não pode votar.");
  }
}