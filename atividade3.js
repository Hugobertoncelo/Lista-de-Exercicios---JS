function verificarSituacao() {
  let nota1 = prompt("Digite a primeira nota:");
  let nota2 = prompt("Digite a segunda nota:");

  nota1 = Number(nota1);
  nota2 = Number(nota2);

  if (isNaN(nota1) || isNaN(nota2)) {
    alert("Por favor, digite notas válidas.");
  } else {
    let media = (nota1 + nota2) / 2;

    if (media >= 6) {
      alert("Aprovado! Média: " + media.toFixed(2));
    } else {
      if (media >= 4) {
        alert("Recuperação. Média: " + media.toFixed(2));
      } else {
        alert("Reprovado. Média: " + media.toFixed(2));
      }
    }
  }
}