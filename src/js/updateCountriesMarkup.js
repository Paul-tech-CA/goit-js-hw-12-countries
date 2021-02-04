import countriesTpl from "../templates/countries.hbs";
import mainCountryTpl from "../templates/mainCountry.hbs";
import refs from "./refs.js";
import { error } from "@pnotify/core/";
import "../js/notifications.js";

function updateCountriesMarkup(data) {
  if (data.length === 1) {
    const markup = mainCountryTpl(data);
    refs.countriesList.insertAdjacentHTML("beforeend", markup);
  } else if (data.length > 1 && data.length <= 10 && data.length !== 0) {
    const markup = countriesTpl(data);
    refs.countriesList.insertAdjacentHTML("beforeend", markup);
  } else {
    error({
      text: "Too many matches found. Please enter a more specific query!",
      delay: 3000,
    });
  }
}

export default updateCountriesMarkup;
