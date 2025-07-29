document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const livros = {
    'capitaes-da-areia': {
      titulo: 'Capitães da Areia',
      autor: 'Jorge Amado',
      preco: 'R$ 39,90',
      imagem: 'img/livros/capitaes.jpg',
      descricao: 'Romance sobre meninos marginalizados em Salvador. Uma das obras mais emblemáticas de Jorge Amado.'
    },
    'a-hora-da-estrela': {
      titulo: 'A Hora da Estrela',
      autor: 'Clarice Lispector',
      preco: 'R$ 29,90',
      imagem: 'img/livros/A-hora-da-estrela.jpg',
      descricao: 'História sensível de uma jovem nordestina no Rio de Janeiro.'
    },
    'dom-casmurro': {
      titulo: 'Dom Casmurro',
      autor: 'Machado de Assis',
      preco: 'R$ 34,90',
      imagem: 'img/livros/dom-casmurro.jpg',
      descricao: 'Clássico da literatura sobre ciúmes e memórias.'
    },
    'o-cortico': {
      titulo: 'O Cortiço',
      autor: 'Aluísio Azevedo',
      preco: 'R$ 32,90',
      imagem: 'img/livros/o-cortico.jpg',
      descricao: 'Um retrato do cortiço no Rio de Janeiro do século XIX.'
    },
    'iracema': {
      titulo: 'Iracema',
      autor: 'José de Alencar',
      preco: 'R$ 28,90',
      imagem: 'img/livros/iracema.jpg',
      descricao: 'Clássico do romantismo brasileiro e da literatura indianista.'
    },
    'quarto-de-despejo': {
      titulo: 'Quarto de Despejo',
      autor: 'Carolina Maria de Jesus',
      preco: 'R$ 35,90',
      imagem: 'img/livros/quarto-de-despejo.jpg',
      descricao: 'Diário emocionante sobre a vida na favela.'
    },
    'vidas-secas': {
      titulo: 'Vidas Secas',
      autor: 'Graciliano Ramos',
      preco: 'R$ 33,90',
      imagem: 'img/livros/vidas-secas.jpg',
      descricao: 'História marcante de uma família sertaneja enfrentando a seca.'
    },
    'o-ateneu': {
      titulo: 'O Ateneu',
      autor: 'Raul Pompeia',
      preco: 'R$ 27,90',
      imagem: 'img/livros/o-ateneu.jpg',
      descricao: 'Narrativa psicológica sobre a vida em um internato carioca.'
    },
    'o-guarani': {
      titulo: 'O Guarani',
      autor: 'José de Alencar',
      preco: 'R$ 31,90',
      imagem: 'img/livros/o-guarani.jpg',
      descricao: 'Uma história de amor e aventura no Brasil colonial.'
    },
    'bras-cubas': {
      titulo: 'Memórias Póstumas de Brás Cubas',
      autor: 'Machado de Assis',
      preco: 'R$ 36,90',
      imagem: 'img/livros/memorias-postumas.jpg',
      descricao: 'Obra-prima do realismo brasileiro narrada por um defunto-autor.'
    },
    'macunaima': {
      titulo: 'Macunaíma',
      autor: 'Mário de Andrade',
      preco: 'R$ 30,90',
      imagem: 'img/livros/macunaima.jpg',
      descricao: 'O herói sem nenhum caráter em uma narrativa cheia de brasilidade.'
    },
    'a-moreninha': {
      titulo: 'A Moreninha',
      autor: 'Joaquim M. de Macedo',
      preco: 'R$ 26,90',
      imagem: 'img/livros/a-moreninha.jpg',
      descricao: 'Primeiro romance da literatura brasileira, cheio de romance juvenil.'
    },
    'mayombe': {
      titulo: 'Mayombe',
      autor: 'Pepetela',
      preco: 'R$ 29,90',
      imagem: 'img/livros/mayombe.jpg',
      descricao: 'Romance que mistura filosofia e luta pela independência de Angola.'
    },
    'o-quinze': {
      titulo: 'O Quinze',
      autor: 'Rachel de Queiroz',
      preco: 'R$ 28,90',
      imagem: 'img/livros/oquinze.jpg',
      descricao: 'Drama da seca de 1915 no sertão nordestino.'
    },
    'a-escrava-isaura': {
      titulo: 'A Escrava Isaura',
      autor: 'Bernardo Guimarães',
      preco: 'R$ 27,90',
      imagem: 'img/livros/escrava-isaura.jpg',
      descricao: 'Romance abolicionista clássico do século XIX.'
    },
    'cemiterio-dos-vivos': {
      titulo: 'Cemitério dos Vivos',
      autor: 'Lima Barreto',
      preco: 'R$ 34,90',
      imagem: 'img/livros/cemiterio.jpg',
      descricao: 'História inspirada na experiência do autor em um hospício.'
    }
  };

  const livro = livros[id];
  if (livro) {
    document.getElementById('livro-img').src = livro.imagem;
    document.getElementById('livro-titulo').textContent = livro.titulo;
    document.getElementById('livro-autor').textContent = livro.autor;
    document.getElementById('livro-preco').textContent = livro.preco;
    document.getElementById('livro-desc').textContent = livro.descricao;

    // Botão de comprar
    const btnComprar = document.querySelector('.btn-comprar');
    if (btnComprar) {
      btnComprar.addEventListener('click', () => {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

        carrinho.push({
          id: id,
          titulo: livro.titulo,
          autor: livro.autor,
          preco: livro.preco,
          imagem: livro.imagem
        });

        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        alert('📚 Livro adicionado ao carrinho!');
        window.location.href = 'carrinho.html';
      });
    }
  } else {
    document.querySelector('.conteudo').innerHTML = '<p>Livro não encontrado.</p>';
  }
});
