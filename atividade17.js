function confirmarDados() {
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const email = document.getElementById('email').value;

  const mensagem = `Nome: ${nome}\nIdade: ${idade}\nEmail: ${email}\n\nDeseja confirmar?`;


  const confirmar = confirm(mensagem);

  if (confirmar) {
    alert("Obrigado por se cadastrar, " + nome + "!");
  } else {
    alert("Cadastro não confirmado.");
  }
}
