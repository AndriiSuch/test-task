import * as types from '../types';

const initialState = {
  currencies: [],
  historyCurrencies: [],
  activeCurrency: {},
  lastPage: '',
};

export const currenctReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LAST_PAGE:
      return {...state, lastPage: action.page};
    case types.SET_ACTIVE_CURRENCY:
      return {...state, activeCurrency: action.payload};
    case types.SET_CURRENCIES:
      return {...state, currencies: action.payload};
    case types.ADD_HISTORY_ITEM:
      return {
        ...state,
        historyCurrencies: [...state.historyCurrencies, action.payload],
      };
    case types.DELETE_HISTORY_ITEM:
      const newHistory = state.historyCurrencies.filter(
        item => item.id !== action.payload,
      );
      return {
        ...state,
        historyCurrencies: newHistory,
      };
    default:
      return state;
  }
};
