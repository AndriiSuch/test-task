import {combineReducers} from 'redux';
import {currenctReducer} from './reducers/currencyReducer';

export const rootReducer = combineReducers({
  currency: currenctReducer,
});
