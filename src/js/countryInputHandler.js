import refs from './refs.js'
import fetchCountries  from './fetchCountries.js'
import addMarkup  from './addMarkup.js';


 export function countryInputHandler(e) {
    const value = e.target.value
  fetchCountries(value).then(countries => {
     addMarkup(countries)
      refs.containerEl.innerHTML = ''
     
    }).catch(error => { return })
}
    


