
document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // CARRINHO
    // =========================================

    let carrinho = [];


    // =========================================
    // QUANTIDADE
    // =========================================

    const produtos = document.querySelectorAll(".produto-planta");

    produtos.forEach(function (produto) {

        const botaoMenos = produto.querySelector(".quantidade-menos");
        const botaoMais = produto.querySelector(".quantidade-mais");
        const quantidade = produto.querySelector(".quantidade");


        botaoMais.addEventListener("click", function () {

            let numero = parseInt(quantidade.textContent);

            numero++;

            quantidade.textContent = numero;

        });


        botaoMenos.addEventListener("click", function () {

            let numero = parseInt(quantidade.textContent);

            if (numero > 1) {
                numero--;
            }

            quantidade.textContent = numero;

        });

    });



    // =========================================
    // ADICIONAR PLANTA
    // =========================================

    const botoesAdicionar = document.querySelectorAll(".adicionar-planta");

    botoesAdicionar.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const produto = botao.closest(".produto-planta");

            const nome = botao.dataset.produto;

            const quantidadeElemento =
                produto.querySelector(".quantidade");

            const quantidade =
                parseInt(quantidadeElemento.textContent);


            // Verifica se já existe no pedido
            const produtoExistente =
                carrinho.find(function (item) {
                    return item.nome === nome;
                });


            if (produtoExistente) {

                produtoExistente.quantidade += quantidade;

            } else {

                carrinho.push({
                    nome: nome,
                    quantidade: quantidade
                });

            }


            // Volta a quantidade do produto para 1
            quantidadeElemento.textContent = "1";


            atualizarPedido();

        });

    });



    // =========================================
    // ATUALIZAR PEDIDO
    // =========================================

    function atualizarPedido() {

        const pedido = document.querySelector("#pedido-plantas");

        pedido.innerHTML = "";


        if (carrinho.length === 0) {

            pedido.innerHTML = `
                <p class="pedido-vazio">
                    Seu pedido está vazio.
                </p>
            `;

            return;
        }


        carrinho.forEach(function (item, index) {

            const produtoPedido =
                document.createElement("div");

            produtoPedido.classList.add("pedido-planta-item");


            produtoPedido.innerHTML = `

                <div class="pedido-planta-info">

                    <strong>
                        ${item.nome}
                    </strong>

                    <span>
                        Quantidade: ${item.quantidade}
                    </span>

                </div>

                <button
                    type="button"
                    class="remover-planta"
                    data-index="${index}">
                    ×
                </button>

            `;


            pedido.appendChild(produtoPedido);

        });


        // =====================================
        // BOTÕES DE REMOVER
        // =====================================

        const botoesRemover =
            document.querySelectorAll(".remover-planta");


        botoesRemover.forEach(function (botao) {

            botao.addEventListener("click", function () {

                const index =
                    parseInt(botao.dataset.index);


                carrinho.splice(index, 1);


                atualizarPedido();

            });

        });

    }



    // =========================================
    // CATEGORIAS
    // =========================================

    const categorias =
        document.querySelectorAll(".categoria-planta");


    categorias.forEach(function (botao) {

        botao.addEventListener("click", function () {

            categorias.forEach(function (item) {
                item.classList.remove("ativa");
            });


            botao.classList.add("ativa");


            const texto =
                botao.querySelector("span").textContent
                .trim()
                .toLowerCase();


            produtos.forEach(function (produto) {

                const categoria =
                    produto.dataset.categoria;


                if (texto === "todas") {

                    produto.style.display = "";

                }

                else if (
                    texto === "folhagens" &&
                    categoria === "folhagens"
                ) {

                    produto.style.display = "";

                }

                else if (
                    texto === "palmeiras" &&
                    categoria === "palmeiras"
                ) {

                    produto.style.display = "";

                }

                else if (
                    texto === "árvores" &&
                    categoria === "arvores"
                ) {

                    produto.style.display = "";

                }

                else if (
                    texto === "ornamentais" &&
                    categoria === "ornamentais"
                ) {

                    produto.style.display = "";

                }

                else {

                    produto.style.display = "none";

                }

            });

        });

    });



    // =========================================
    // FINALIZAR PEDIDO
    // =========================================

    const botaoFinalizar =
        document.querySelector("#finalizar-pedido");


    botaoFinalizar.addEventListener("click", function () {

        if (carrinho.length === 0) {

            alert(
                "🌿 Seu pedido está vazio!\n\n" +
                "Adicione pelo menos uma planta antes de finalizar."
            );

            return;
        }


        // =====================================
        // SERVIÇOS
        // =====================================

        const servicos = [];


        document.querySelectorAll(
            ".servico-pedido input:checked"
        ).forEach(function (checkbox) {

            servicos.push(checkbox.value);

        });


        // =====================================
        // OBSERVAÇÃO
        // =====================================

        const observacao =
            document.querySelector("#observacao").value.trim();



        // =====================================
        // MONTAR MENSAGEM
        // =====================================

        let mensagem =
            "🌿 NOVO PEDIDO — ARTE & FLORES PAISAGISMO\n\n";


        mensagem += "🪴 PLANTAS:\n";


        carrinho.forEach(function (item) {

            mensagem +=
                "• " +
                item.nome +
                " — " +
                item.quantidade +
                " unidade(s)\n";

        });



        // =====================================
        // SERVIÇOS
        // =====================================

        if (servicos.length > 0) {

            mensagem += "\n🌱 SERVIÇOS:\n";


            servicos.forEach(function (servico) {

                mensagem +=
                    "• " +
                    servico +
                    "\n";

            });

        }



        // =====================================
        // OBSERVAÇÃO
        // =====================================

        if (observacao !== "") {

            mensagem +=
                "\n📝 OBSERVAÇÃO:\n" +
                observacao +
                "\n";

        }



        mensagem +=
            "\n🌿 Gostaria de consultar disponibilidade e orçamento.";



        // =====================================
        // WHATSAPP
        // =====================================

        /*
        COLOQUE AQUI O NÚMERO DO WHATSAPP
        DA ARTE & FLORES PAISAGISMO.

        Exemplo:

        const numeroWhatsApp = "5543999999999";

        NÃO coloque +, espaços, parênteses ou hífen.
        */


        const numeroWhatsApp = "";


        if (numeroWhatsApp === "") {

            alert(
                "🌿 Pedido montado com sucesso!\n\n" +
                "Agora só falta configurar o WhatsApp da Arte & Flores Paisagismo."
            );


            console.log(mensagem);


            return;

        }


        const mensagemCodificada =
            encodeURIComponent(mensagem);


        const link =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            mensagemCodificada;


        window.open(link, "_blank");

    });



    // =========================================
    // INICIALIZAÇÃO
    // =========================================

    atualizarPedido();

});