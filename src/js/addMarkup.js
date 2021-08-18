import refs from './refs.js'
import countriesList from '../templates/countriesList.hbs'
import oneCountry from '../templates/oneCountry.hbs'
import notification from './notifications.js';

export default function addMarkup(countries) {
    if (!countries) { return }
    
    if (countries.length === 1) {
        const markup = oneCountry(countries)
        refs.containerEl.insertAdjacentHTML('beforeend', markup)
        console.log(countries)
         return
    }

    if (countries.length >= 2 && countries.length <= 10) {
        const markup = countriesList(countries)
       
        refs.containerEl.insertAdjacentHTML('beforeend', markup)
        return
    }
    
    if (countries.length > 10) {
        notification.tooManyMatchesError()
        return
}
}




