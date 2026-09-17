const formulario = document.getElementById("formulario-plantas");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const planta = document.getElementById("planta").value;

    const mensagem =
        "Olá Fabiano! Vim pelo site da Arte & Flores Paisagismo. 🌿\n\n" +
        "Nome: " + nome + "\n" +
        "Planta que procuro: " + planta;

    const link = "https://wa.me/554399961733?text=" + encodeURIComponent(mensagem);

    window.open(link, "_blank");
});
