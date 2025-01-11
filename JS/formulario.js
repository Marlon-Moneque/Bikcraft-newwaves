const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column:1/-1; padding=1rem; border-radius: 4px; background: #f7f7f7;'>Mensagem Enviada!</p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column:1/-1; padding=1rem; border-radius: 4px; background: #f7f7f7;'>>Erro no envio, tente novamente!</p>";
  }
}
function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
