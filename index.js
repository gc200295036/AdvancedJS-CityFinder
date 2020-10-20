/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

async function getCities() {
  let run = await fetch(endpoint);
  let data = await run.json();
  cities.push(...data);
}
getCities();

// Old code below that is only synchronus with .then and promise

// fetch(endpoint)
//   .then((blob) => blob.json())
//   .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}
import { numberWithCommas } from './utils.js';
// Code has been exported to secondary .js file using JS Modules
// function numberWithCommas(x) {
//   // Don't have to use Stackoverflow's solution in video
//   // Refer new number formatting feature - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
//   return new Intl.NumberFormat().format(x);
// }
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `;
    })
    .join('');
  suggestions.innerHTML = html;
}
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
