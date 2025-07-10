
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('lista-favoritos');
  const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
  if (!favoritos.length) {
    container.innerHTML = '<p>Nenhum livro favoritado ainda.</p>';
    return;
  }

  favoritos.forEach(livro => {
    const card = document.createElement('a');
    card.href = `livro.html?id=${livro.id}`;
    card.className = 'card-livro';
    card.innerHTML = `
      <img src="${livro.img}" alt="${livro.titulo}">
      <div class="info">
        <h4>${livro.titulo}</h4>
        <p>${livro.autor}</p>
      </div>
    `;
    container.appendChild(card);
  });
});
