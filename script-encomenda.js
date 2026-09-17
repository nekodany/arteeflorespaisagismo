const numeroWhatsApp = "554399961733";

const botao = document.querySelector(".botao-enviar-encomenda");

if (botao) {
    botao.addEventListener("click", function (event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const whatsapp = document.getElementById("whatsapp").value.trim();
        const planta = document.getElementById("planta").value.trim();
        const quantidade = document.getElementById("quantidade").value.trim();
        const tamanho = document.getElementById("tamanho").value.trim();
        const entrega = document.getElementById("entrega").value.trim();
        const observacoes = document.getElementById("observacoes").value.trim();

        if (nome === "") {
            alert("Por favor, informe seu nome.");
            return;
        }

        if (whatsapp === "") {
            alert("Por favor, informe seu WhatsApp.");
            return;
        }

        if (planta === "") {
            alert("Por favor, informe qual planta você deseja.");
            return;
        }

        if (quantidade === "") {
            alert("Informe a quantidade desejada.");
            return;
        }

        const texto =
            "Olá! Vim pelo site da Arte & Flores Paisagismo e gostaria de fazer uma encomenda de plantas. 🌿\n\n" +
            "Nome: " + nome + "\n" +
            "WhatsApp: " + whatsapp + "\n" +
            "Planta desejada: " + planta + "\n" +
            "Quantidade: " + quantidade + "\n" +
            "Tamanho: " + tamanho + "\n" +
            "Forma de entrega: " + entrega + "\n\n" +
            "Observações:\n" +
            (observacoes || "Nenhuma");

        const mensagemCodificada = encodeURIComponent(texto);

        const link =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            mensagemCodificada;

        window.open(link, "_blank");
    });
}