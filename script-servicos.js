const numeroWhatsApp = "554399961733";

const botao = document.getElementById("botao-whatsapp");

if (botao) {
    botao.addEventListener("click", function () {

        const nome = document.getElementById("nome").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        const servicosSelecionados = Array.from(
            document.querySelectorAll('input[name="servico"]:checked')
        ).map(input => input.value);

        if (nome === "") {
            alert("Por favor, informe seu nome.");
            return;
        }

        if (servicosSelecionados.length === 0) {
            alert("Selecione pelo menos um serviço.");
            return;
        }

        if (mensagem === "") {
            alert("Conte um pouco sobre o que você precisa.");
            return;
        }

        const servicos = servicosSelecionados.join(", ");

        const texto =
            "Olá! Vim pelo site da Arte & Flores Paisagismo e gostaria de solicitar um orçamento. 🌿\n\n" +
            "Nome: " + nome + "\n" +
            "Serviços: " + servicos + "\n\n" +
            "O que preciso:\n" +
            mensagem;

        const mensagemCodificada = encodeURIComponent(texto);

        const link =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            mensagemCodificada;

        window.open(link, "_blank");
    });
}