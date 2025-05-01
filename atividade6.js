function verificarSePodeDirigir() {
  let idade = prompt("Digite sua idade:");
  idade = Number(idade);

  if (isNaN(idade) || idade < 0) {
    alert("Idade inválida.");
    return;
  }

  let temCarteira = confirm(
    "Você tem carteira de motorista? (OK = Sim / Cancelar = Não)"
  );

  if (idade >= 18 && temCarteira) {
    alert("Você pode dirigir.");
  } else {
    alert("Você NÃO pode dirigir.");
  }
}