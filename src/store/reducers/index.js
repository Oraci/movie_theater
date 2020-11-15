import { combineReducers } from 'redux';

import movies from './movies';
import loader from './loader';

export default combineReducers({ movies, loader });
