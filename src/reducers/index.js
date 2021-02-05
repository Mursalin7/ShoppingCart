import {combineReducers} from 'redux';
import {itemReducer as items} from './itemReducer';
import {shop} from './shop';

export default combineReducers({shop,items});
