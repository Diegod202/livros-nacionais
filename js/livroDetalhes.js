
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const livros = {
    'capitaes-da-areia': {
      titulo: 'Capitães da Areia',
      autor: 'Jorge Amado',
      preco: 'R$ 39,90',
      imagem: 'img/capitais.jpg',
      descricao: 'Romance sobre meninos marginalizados em Salvador. Uma das obras mais emblemáticas de Jorge Amado.'
    },
    'a-hora-da-estrela': {
      titulo: 'A Hora da Estrela',
      autor: 'Clarice Lispector',
      preco: 'R$ 29,90',
      imagem: 'img/clarice.jpg',
      descricao: 'História sensível de uma jovem nordestina no Rio de Janeiro.'
    },
    'dom-casmurro': {
      titulo: 'Dom Casmurro',
      autor: 'Machado de Assis',
      preco: 'R$ 34,90',
      imagem: 'img/dom-casmurro.jpg',
      descricao: 'Clássico da literatura sobre ciúmes e memórias.'
    }
  };

  const livro = livros[id];
  if (livro) {
    document.getElementById('livro-img').src = livro.imagem;
    document.getElementById('livro-titulo').textContent = livro.titulo;
    document.getElementById('livro-autor').textContent = livro.autor;
    document.getElementById('livro-preco').textContent = livro.preco;
    document.getElementById('livro-desc').textContent = livro.descricao;
  } else {
    document.querySelector('.conteudo').innerHTML = '<p>Livro não encontrado.</p>';
  }
});
