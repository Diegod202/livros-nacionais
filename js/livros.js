
document.addEventListener('DOMContentLoaded', () => {
  const listaLivros = document.getElementById('lista-livros');
  const inputBusca = document.getElementById('busca');
  const urlParams = new URLSearchParams(window.location.search);
  const generoFiltro = urlParams.get('genero');

  const livros = [
    { id: 'capitaes-da-areia', titulo: 'Capitães da Areia', autor: 'Jorge Amado', genero: 'romance', img: 'img/capitais.jpg' },
    { id: 'a-hora-da-estrela', titulo: 'A Hora da Estrela', autor: 'Clarice Lispector', genero: 'romance', img: 'img/clarice.jpg' },
    { id: 'dom-casmurro', titulo: 'Dom Casmurro', autor: 'Machado de Assis', genero: 'romance', img: 'img/dom-casmurro.jpg' },
    { id: 'o-cortico', titulo: 'O Cortiço', autor: 'Aluísio Azevedo', genero: 'naturalismo', img: 'img/cortico.jpg' },
    { id: 'iracema', titulo: 'Iracema', autor: 'José de Alencar', genero: 'romance', img: 'img/iracema.jpg' },
    { id: 'quarto-de-despejo', titulo: 'Quarto de Despejo', autor: 'Carolina Maria de Jesus', genero: 'diario', img: 'img/quarto.jpg' },
    { id: 'vidas-secas', titulo: 'Vidas Secas', autor: 'Graciliano Ramos', genero: 'romance', img: 'img/vidas-secas.jpg' },
    { id: 'o-ateneu', titulo: 'O Ateneu', autor: 'Raul Pompeia', genero: 'romance-psicologico', img: 'img/o-ateneu.jpg' },
    { id: 'o-guarani', titulo: 'O Guarani', autor: 'José de Alencar', genero: 'romance', img: 'img/o-guarani.jpg' },
    { id: 'bras-cubas', titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', genero: 'romance-satirico', img: 'img/bras-cubas.jpg' },
    { id: 'macunaima', titulo: 'Macunaíma', autor: 'Mário de Andrade', genero: 'fantasia', img: 'img/macunaima.jpg' },
    { id: 'a-moreninha', titulo: 'A Moreninha', autor: 'Joaquim M. de Macedo', genero: 'romance', img: 'img/a-moreninha.jpg' },
    { id: 'mayombe', titulo: 'Mayombe', autor: 'Pepetela', genero: 'filosofico', img: 'img/mayombe.jpg' },
    { id: 'o-quinze', titulo: 'O Quinze', autor: 'Rachel de Queiroz', genero: 'drama', img: 'img/o-quinze.jpg' },
    { id: 'a-escrava-isaura', titulo: 'A Escrava Isaura', autor: 'Bernardo Guimarães', genero: 'abolicionista', img: 'img/a-escrava-isaura.jpg' },
    { id: 'cemiterio-dos-vivos', titulo: 'Cemitério dos Vivos', autor: 'Lima Barreto', genero: 'psicologico', img: 'img/cemiterio-dos-vivos.jpg' }
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
