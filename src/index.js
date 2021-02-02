import "./css/style.css";
import countriesTpl from './templates/countries.hbs';

const refs = {
    countriesList: document.querySelector('.countries'),
    searchForm: document.querySelector('.js-search-form'),
}

const url = 'https://restcountries.eu/rest/v2/all'


fetch(url)
.then(res => res.json())
.then(fetchCountries)
.catch(error => console.log(error));




function fetchCountries(searchQuery) {
    // console.log(searchQuery);
    searchQuery.forEach(element => {

        // const markup = countriesTpl(element.name)
        refs.countriesList.insertAdjacentHTML(
            'beforeend', 
            `<li class='pokemon' data-url='${element.url}'>${element.name}</li>`);

    // console.log(element.name);        
    });
    // refs.pokemonCont.innerHTML = 
    // `<h3>${data.name}</h3>
    // <img src="${data.sprites.front_default}">
    // <ul class="moves"></ul>`;
    // const moveList = document.querySelector('.moves');
    // data.moves.forEach(moves => moveList.insertAdjacentHTML('beforeend', `<li>${moves.move.name}</li>`),
    // );
}





// debounce !!!!!
refs.searchForm.addEventListener('input', event => {
    event.preventDefault();
    const form = event.currentTarget;
    const inputValue = form.elements.country.value; 

    console.log(inputValue);
    // refs.countriesList.
})