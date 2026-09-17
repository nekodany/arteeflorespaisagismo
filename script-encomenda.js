const numeroWhatsApp = "554399961733";

const formulario = document.getElementById("formulario-plantas");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const whatsapp = document.getElementById("whatsapp").value.trim();
        const planta = document.getElementById("planta").value.trim();
        const quantidade = document.getElementById("quantidade").value.trim();
        const tamanho = document.getElementById("tamanho").value.trim();
        const entrega = document.getElementById("entrega").value.trim();
        const observacoes = document.getElementById("observacoes").value.trim();

        if (nome === "" || whatsapp === "" || planta === "") {
            alert("Preencha seu nome, WhatsApp e a planta que deseja encomendar.");
            return;
        }

        const mensagem =
            "Olá! Vim pelo site da Arte & Flores Paisagismo e gostaria de fazer uma encomenda de plantas. 🌿\n\n" +
            "Nome: " + nome + "\n" +
            "WhatsApp: " + whatsapp + "\n" +
            "Planta: " + planta + "\n" +
            "Quantidade: " + quantidade + "\n" +
            "Tamanho: " + tamanho + "\n" +
            "Entrega/Retirada: " + entrega + "\n" +
            "Observações: " + (observacoes || "Nenhuma");

        const link =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            encodeURIComponent(mensagem);

        window.open(link, "_blank");
    });
}
