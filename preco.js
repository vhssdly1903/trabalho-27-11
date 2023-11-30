const produtos = [
    { codigo: 1, nome: 'Produto A', preco: 10.0 },
    { codigo: 2, nome: 'Produto B', preco: 20.0 },
    { codigo: 3, nome: 'Produto C', preco: 15.0 },
  ];

  function calcularTotal(codigo, quantidade) {
    let produtoSelecionado = null;

    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].codigo === codigo) {
        produtoSelecionado = produtos[i];
        break;
      }
    }

    if (produtoSelecionado) {
      switch (codigo) {
        case 1:
        case 2:
        case 3:
          return produtoSelecionado.preco * quantidade;
        default:
          return 'Código de produto inválido';
      }
    } else {
      return 'Produto não encontrado';
    }
  }

  function calcularValorTotal() {
    const codigoProdutoInput = document.getElementById('codigoProduto');
    const quantidadeInput = document.getElementById('quantidade');
    const resultadoElement = document.getElementById('resultado');

    const codigoProduto = parseInt(codigoProdutoInput.value);
    const quantidade = parseInt(quantidadeInput.value);

    const total = calcularTotal(codigoProduto, quantidade);

    if (typeof total === 'number') {
      resultadoElement.textContent = `O valor total é: R$ ${total.toFixed(2)}`;
    } else {
      resultadoElement.textContent = total;
    }
  }