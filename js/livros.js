
document.addEventListener('DOMContentLoaded', () => {
  const listaLivros = document.getElementById('lista-livros');
  const inputBusca = document.getElementById('busca');
  const urlParams = new URLSearchParams(window.location.search);
  const generoFiltro = urlParams.get('genero');

  const livros = [
    { id: 'capitaes-da-areia', titulo: 'Capitães da Areia', autor: 'Jorge Amado', genero: 'romance', img: 'img/livros/capitaes.jpg' },
    { id: 'a-hora-da-estrela', titulo: 'A Hora da Estrela', autor: 'Clarice Lispector', genero: 'romance', img: 'img/livros/A-hora-da-estrela.jpg' },
    { id: 'dom-casmurro', titulo: 'Dom Casmurro', autor: 'Machado de Assis', genero: 'romance', img: 'img/livros/dom-casmurro.jpg' },
    { id: 'o-cortico', titulo: 'O Cortiço', autor: 'Aluísio Azevedo', genero: 'naturalismo', img: 'img/livros/o-cortico.jpg' },
    { id: 'iracema', titulo: 'Iracema', autor: 'José de Alencar', genero: 'romance', img: 'img/livros/iracema.jpg' },
    { id: 'quarto-de-despejo', titulo: 'Quarto de Despejo', autor: 'Carolina Maria de Jesus', genero: 'diario', img: 'img/livros/quarto-de-despejo.jpg' },
    { id: 'vidas-secas', titulo: 'Vidas Secas', autor: 'Graciliano Ramos', genero: 'romance', img: 'img/livros/vidas-secas.jpg' },
    { id: 'o-ateneu', titulo: 'O Ateneu', autor: 'Raul Pompeia', genero: 'romance-psicologico', img: 'img/livros/o-ateneu.jpg' },
    { id: 'o-guarani', titulo: 'O Guarani', autor: 'José de Alencar', genero: 'romance', img: 'img/livros/o-guarani.jpg' },
    { id: 'bras-cubas', titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', genero: 'romance-satirico', img: 'img/livros/memorias-postumas.jpg' },
    { id: 'macunaima', titulo: 'Macunaíma', autor: 'Mário de Andrade', genero: 'fantasia', img: 'img/livros/macunaima.jpg' },
    { id: 'a-moreninha', titulo: 'A Moreninha', autor: 'Joaquim M. de Macedo', genero: 'romance', img: 'img/livros/a-moreninha.jpg' },
    { id: 'mayombe', titulo: 'Mayombe', autor: 'Pepetela', genero: 'filosofico', img: 'img/livros/mayombe.jpg' },
    { id: 'o-quinze', titulo: 'O Quinze', autor: 'Rachel de Queiroz', genero: 'drama', img: 'img/livros/oquinze.jpg' },
    { id: 'a-escrava-isaura', titulo: 'A Escrava Isaura', autor: 'Bernardo Guimarães', genero: 'abolicionista', img: 'img/livros/escrava-isaura.jpg' },
    { id: 'cemiterio-dos-vivos', titulo: 'Cemitério dos Vivos', autor: 'Lima Barreto', genero: 'psicologico', img: 'img/livros/cemiterio.jpg' }
  ];

  const renderizarLivros = (filtroTexto = '') => {
    const termo = filtroTexto.toLowerCase();
    listaLivros.innerHTML = '';

    const filtrados = livros.filter(livro => {
      const correspondeGenero = !generoFiltro || livro.genero === generoFiltro;
      const correspondeTexto = livro.titulo.toLowerCase().includes(termo) || livro.autor.toLowerCase().includes(termo);
      return correspondeGenero && correspondeTexto;
    });

    filtrados.forEach(livro => {
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
      listaLivros.appendChild(card);
    });
  };

  inputBusca.addEventListener('input', () => renderizarLivros(inputBusca.value));
  renderizarLivros();
});
