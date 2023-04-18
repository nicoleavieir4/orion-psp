/*
metodo main
separar declaracao e execucao
stack
*/

// DECLARAÇÕES:

const prompt = require("prompt-sync")();

//loop de repeticao para adicionar mais itens no carrinho
function selecionarProduto() {
  const produtos = [
    { codigo: 1, nome: "Produto A", preco: 100.0 },
    { codigo: 2, nome: "Produto B", preco: 10.0 },
    { codigo: 3, nome: "Produto C", preco: 1.0 },
  ];

  produtos.forEach((produto) => {
    console.log(`${produto.codigo} - ${produto.nome} - R$ ${produto.preco}`);
  });

  const codigoDoProduto = +prompt(
    "Adicionar item (Digite o código do item ou 0 para finalizar): "
  );

  return produtos[codigoDoProduto - 1];
}

//quantidade de produtos
function qtdProdutos() {
  const quantidade = +prompt("Informar a quantidade: ");
  if (quantidade === 0) {
    finalizarCompra = true;
  } else {
    console.log(`Você selecionou ${quantidade} produto.`);
  }

  console.log(`O total de produtos selecionados é: ${quantidade}`);

  return quantidade;
}

// soma dos valores

// carrinho é a lista (array) de itens de produtos selecionados
function somaProdutos(carrinho) {
  if (carrinho.length > 0) {
    // item possui produto e quantidade (main)
    const carrinhoCalculado = carrinho.map((itemCarrinho) => {
      // map esta transformando um carrinho em um carrinho calculado
      const produto = itemCarrinho.produto;
      const qtd = itemCarrinho.quantidade;
      const subtotal = produto.preco * qtd;
      return {
        nome: produto.nome,
        quantidade: qtd,
        preco: produto.preco,
        subtotal,
      };
    });
    // carrinho calculado possui itens com as propriedades nome, quantidade, preco e subtotal
    carrinhoCalculado.forEach((itemCarrinhoCalculado) => {
      //forEach é um metodo de iteracao, nao possui retorno
      console.log(
        `${itemCarrinhoCalculado.nome} | qnt: ${itemCarrinhoCalculado.quantidade} | R$ ${itemCarrinhoCalculado.preco} | R$ ${itemCarrinhoCalculado.subtotal}`
      );
    });

    return carrinhoCalculado
      .map((item) => item.subtotal) // transforma um item (objeto) de carrinhoCalculado em um numero de subtotal (pega o subtotal de cada item do carrinho)
      .reduce(function (acumulador, valorAtual) {
        const resultado = acumulador + valorAtual;

        return resultado;
      }); // reduce transforma uma lista de numeros (map) em um unico numero, que é a soma de todos os numeros (subtotal)
  } else {
    console.log(
      "Quantidade inválida! Por favor, informe uma quantidade maior que zero."
    );
  }
}

function payment () {
  const pgto = prompt(
    "Selecione a opção de pagamento: " +
      "\n1 - Crédito" +
      "\n2 - Débito" +
      "\n3 - Dinheiro"
  );

  console.log(pgto);

  let formaPagto;

  switch (pgto) {
    case "1":
      formaPagto = "Crédito";
      break;
    case "2":
      formaPagto = "Débito";
      break;
    case "3":
      formaPagto = "Dinheiro";
      break;
    default:
      formaPagto = "Opção inválida";
  }

  return formaPagto;
}

function main() {
  const carrinho = [];

  let produtoSelecionado;

  do {
    produtoSelecionado = selecionarProduto(); // retorna o objeto selecionado pelo user (propriedades: codigo, nome e preco)

    if (produtoSelecionado) {
      const totalProdutos = qtdProdutos(); // retorna um numero informado pelo user
      console.log(`Foi selecionado: ${produtoSelecionado.nome}`);
      const item = {
        // item é um objeto que possui como propriedade produto e quantidade
        codigo: produtoSelecionado.codigo, // verificar necessidade dessa linha
        produto: produtoSelecionado, // as propriedades do produto do item sao nome e preco (atribuido por referencia, linha 89)
        quantidade: totalProdutos, // item.quantidade = total de produtos (atribuido por referencia, linha 90)
      };
      carrinho.push(item);
    }
  } while (produtoSelecionado);

  const valorTotal = somaProdutos(carrinho); // estamos passando a referencia de carrinho como argumento da funcao
  //somaProdutos retorna o valor total dos itens do carrinho

  console.log(
    `Total de compra: R$ ${valorTotal}. Qual será a forma de pagamento?`
  );

   const pgto = payment ();

   console.log(
     `Você optou por ${pgto}. \nCompra finalizada com sucesso!`
   );

}

// const produto = selecionarProduto();
// const qntProduto = qtdProdutos();
// const produtoSelecionado = selecionarProduto(produtoSelecionado);

// console.log(`Foi selecionado: ${produto.nome}`);
// console.log(qntProduto);
//}

// EXECUÇÕES:

main();
