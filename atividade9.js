const turno = prompt(
  "Qual o seu turno? (M - Matutino, V - Vespertino, N - Noturno):"
);

if (turno.toUpperCase() === "M") {
  alert("Bom dia!");
} else {
  if (turno.toUpperCase() === "V") {
    alert("Boa tarde!");
  } else {
    if (turno.toUpperCase() === "N") {
      alert("Boa noite!");
    } else {
      alert("Valor inválido!");
    }
  }
}