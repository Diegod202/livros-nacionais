document.addEventListener('DOMContentLoaded', () => {
  const listaCarrinho = document.getElementById('lista-carrinho');
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  if (carrinho.length === 0) {
    listaCarrinho.innerHTML = '<p>🛒 Seu carrinho está vazio!</p>';
    return;
  }

  listaCarrinho.innerHTML = carrinho.map((livro, index) => `
    <div class="card-livro">
      <img src="${livro.imagem}" alt="${livro.titulo}">
      <div class="info">
        <h4>${livro.titulo}</h4>
        <p>${livro.autor}</p>
        <span>${livro.preco}</span>
        <br>
        <button class="remover" data-index="${index}">Remover</button>
      </div>
    </div>
  `).join('');

  // Criei um botão remover
  document.querySelectorAll('.remover').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = btn.getAttribute('data-index');
      carrinho.splice(index, 1);
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      window.location.reload();
    });
  });

  // Aqui mostra o Total
  const total = carrinho.reduce((soma, livro) => {
    return soma + parseFloat(livro.preco.replace('R$', '').replace(',', '.'));
  }, 0);

  const totalDiv = document.createElement('div');
  totalDiv.classList.add('total-carrinho');
  totalDiv.innerHTML = `
    <h3>Total: R$ ${total.toFixed(2).replace('.', ',')}</h3>
    <button id="finalizar">Finalizar Compra</button>
  `;
  listaCarrinho.appendChild(totalDiv);

  // Botão para finalizar compra
  document.getElementById('finalizar').addEventListener('click', () => {
    alert('✅ Compra finalizada com sucesso!');
    localStorage.removeItem('carrinho');
    window.location.reload();
  });
});
