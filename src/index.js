import './sass/main.scss';

import  refs  from './js/refs.js'
import { countryInputHandler } from './js/countryInputHandler.js'


var debounce = require('lodash.debounce');


refs.inputEl.addEventListener('input', debounce(countryInputHandler, 500))

