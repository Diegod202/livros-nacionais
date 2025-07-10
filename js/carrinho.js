
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('lista-carrinho');
  let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');

  if (!carrinho.length) {
    container.innerHTML = '<p>Nenhum livro no carrinho ainda.</p>';
    return;
  }

  carrinho.forEach((livro, index) => {
    const card = document.createElement('div');
    card.className = 'card-livro';
    card.innerHTML = `
      <img src="${livro.img}" alt="${livro.titulo}">
      <div class="info">
        <h4>${livro.titulo}</h4>
        <p>${livro.autor}</p>
        <label>Qtd:
          <input type="number" min="1" value="${livro.qtd || 1}" data-index="${index}" class="qtd-input">
        </label>
        <button class="btn-remover" data-index="${index}">Remover</button>
      </div>
    `;
    container.appendChild(card);
  });

  // Botão finalizar pedido
  const btnFinalizar = document.createElement('button');
  btnFinalizar.textContent = "Finalizar Pedido";
  btnFinalizar.className = "btn-finalizar";
  btnFinalizar.onclick = () => {
    const atualCarrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    const resumo = atualCarrinho.map(l => `- ${l.titulo} (Qtd: ${l.qtd || 1})`).join('\n');
    alert("Pedido finalizado com os seguintes itens:\n" + resumo);
  };
  container.after(btnFinalizar);

  // Remover item
  document.querySelectorAll('.btn-remover').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.index;
      carrinho.splice(idx, 1);
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      location.reload();
    });
  });

  // Atualizar quantidade
  document.querySelectorAll('.qtd-input').forEach(input => {
    input.addEventListener('change', () => {
      const idx = input.dataset.index;
      carrinho[idx].qtd = parseInt(input.value);
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
    });
  });
});
