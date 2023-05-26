/* selecionando o DOM */

const list = document.getElementById('add-cards')

const array = [
    { 
      title: 'Título 1',
      description: 'Descrição 1',
      image: 'https://i.imgur.com/oYiTqum.jpg',
      thumb: 'https://i.imgur.com/7D7I6dI.png'
    },
    { 
      title: 'Título 2',
      description: 'Descrição 2',
      image: 'https://i.imgur.com/abc123.jpg',
      thumb: 'https://i.imgur.com/def456.png'
    },
    // adicione mais objetos ao array conforme necessário
  ];
  
  
  for (const item of array) {
    const html = `
      <li>
        <a href="" class="card">
          <img src="${item.image}" class="card__image" alt="" />
          <div class="card__overlay">
            <div class="card__header">
              <img class="card__thumb" src="${item.thumb}" alt="" />
              <div class="card__header-text">
                <h3 class="card__title">${item.title}</h3>
              </div>
            </div>
            <p class="card__description">${item.description}</p>
          </div>
        </a>
      </li>
    `;
    list.innerHTML += html;
  }
  