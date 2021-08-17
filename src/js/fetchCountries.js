import  notification from './notifications.js'
import  refs from './refs.js'


export default function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Error Fetching data');
    })
    .catch(error => {
      refs.inputEl.value = '';
      notification.badRequest(error);
    });
}


