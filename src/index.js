import pokemonCardTpl from './handlebars/pokemonTemplates.handlebars';

const refs = {
    pokeboll: document.querySelector('.pokeboll'),
  }

fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then(response => {
    return response.json();
  })
  .then(pokemon => {
    console.log(pokemon);
    const markup = pokemonCardTpl(pokemon);
    console.log(markup);
    refs.pokeboll.insertAdjacentHTML('afterbegin', markup);
  })
  .catch(error => {
    console.error('Ошибка при выполнении запроса:', error.message);    
  });  

  console.log(refs.pokeboll);