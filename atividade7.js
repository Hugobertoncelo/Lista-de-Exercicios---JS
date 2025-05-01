function verificarGuerreiro() {
  let estuda = confirm("Você estuda? (OK = Sim / Cancelar = Não)");
  let trabalha = confirm("Você trabalha? (OK = Sim / Cancelar = Não)");

  if (estuda && trabalha) {
    alert("Você é guerreiro!");
  }
}