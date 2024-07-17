const produtos = [
  { id: 1, precoUnitario: 10.00, quantidade: 2 },
  { id: 2, precoUnitario: 10.00, quantidade: 2 },
  { id: 3, precoUnitario: 10.00, quantidade: 2 },
  { id: 4, precoUnitario: 10.00, quantidade: 0 }
];

function calcularVF(produtos) {
  let valorFinal = 0;

  produtos.forEach(function(produto) {
    const subtotal = produto.precoUnitario * produto.quantidade;
    valorFinal += subtotal;
  });

  return valorFinal;
}

const valorCarrinho = calcularVF(produtos);

console.log('O valor final do carrinho é R$ ' + valorCarrinho.toFixed(2));