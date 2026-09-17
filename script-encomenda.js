alert("SCRIPT DA ENCOMENDA CARREGOU!");

const formulario = document.getElementById("formulario-plantas");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("O botão foi acionado!");

});
