import "./css/style.css";
import fetchCountries from "./js/fetchCountries.js";
import updateCountriesMarkup from "./js/updateCountriesMarkup.js";
import refs from "./js/refs.js";

const debounce = require("lodash.debounce");

refs.searchForm.addEventListener("input", debounce(debouncedInput, 500));

function debouncedInput(event) {
  event.preventDefault();

  const inputValue = event.target.value;
  refs.countriesList.innerHTML = "";
  fetchCountries(inputValue).then(updateCountriesMarkup);
}
