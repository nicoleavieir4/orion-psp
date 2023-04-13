const prompt = require("prompt-sync")();

const produtos = {
  1: {
    produto: "Produto A",
    preco: 100.0,
  },
  2: {
    produto: "Produto B",
    preco: 10.0,
  },
  3: {
    produto: "Produto C",
    preco: 1.0,
  },
};

let carrinho = {};
let finalizarCompra = false;

do {
  console.log("Selecione os itens do carrinho:" + produtos);

  for (const codigo in produtos) {
    console.log(
      `${codigo} - ${produtos[codigo].produto} - R$ ${produtos[codigo].preco}`
    );
  }

  const codigoItem = +prompt(
    "Adicionar item (Digite o código do item ou 0 para finalizar): "
  );

  switch (codigoItem) {
    case 0:
      finalizarCompra = true;
      break;
    case 1:
    case 2:
    case 3:
      const quantidade = +prompt("Informar a quantidade: ");
      if (quantidade > 0) {
        const item = produtos[codigoItem];
        const subtotal = item.preco * quantidade;

        carrinho[item.produto] = {
          quantidade: quantidade,
          precoUnitario: item.preco,
          subtotal: subtotal,
        };

        console.log(
          `${item.produto} | qnt: ${quantidade} | R$ ${item.preco} | R$ ${subtotal}`
        );
      } else {
        console.log(
          "Quantidade inválida! Por favor, informe uma quantidade maior que zero."
        );
      }
      break;
    default:
      console.log(
        "Código de item inválido! Por favor, escolha um código de item válido."
      );
  }
} while (!finalizarCompra);

function realizarPagamento() {
  const pgto = prompt(
    "Selecione a opção de pagamento: " +
      "\n1 - Crédito" +
      "\n2 - Débito" +
      "\n3 - Dinheiro"
  );
  let totalCompra = 0;
  for (const item in carrinho) {
    totalCompra += carrinho[item].subtotal;
  }

  console.log(
    `Total de compra: R$ ${totalCompra}. Qual será a forma de pagamento?`
  );

  console.log(pgto);

  let nomePagamento;
  switch (pgto) {
    case "1":
      nomePagamento = "Crédito";
      break;
    case "2":
      nomePagamento = "Débito";
      break;
    case "3":
      nomePagamento = "Dinheiro";
      break;
    default:
      nomePagamento = "Opção inválida";
  }

  console.log(
    `Você optou por ${nomePagamento}. \nCompra finalizada com sucesso!`
  );
}

realizarPagamento();
