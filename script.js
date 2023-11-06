// Método Simples - Usando innerHTML
document.getElementById('titulo').innerHTML = 'Produtos à Venda';

// Método Complexo - Criando elementos programaticamente
const produtoContainer = document.getElementById('produto-container');

const produto = document.createElement('div');
produto.className = 'produto';

const nome = document.createElement('h2');
nome.innerHTML = 'Creme Hidratante';

const descricao = document.createElement('p');
descricao.innerHTML = 'Para peles oleosa';

const preco = document.createElement('span');
preco.innerHTML = 'Preço: R$ 99.99';

const imagem = document.createElement('img');
imagem.src = 'img/creme pele sensiveis.jpeg';
imagem.alt = 'Imagem do Produto A';

produto.appendChild(nome);
produto.appendChild(descricao);
produto.appendChild(preco);
produto.appendChild(imagem);

produtoContainer.appendChild(produto);
