import * as types from '../types';

export const setCurrencies = currency => {
  return {
    type: types.SET_CURRENCIES,
    payload: currency,
  };
};

export const addHistoryItem = item => {
  return {
    type: types.ADD_HISTORY_ITEM,
    payload: item,
  };
};

export const deleteHistoryItem = id => {
  return {
    type: types.DELETE_HISTORY_ITEM,
    payload: id,
  };
};

export const setLastPage = page => ({
  type: types.SET_LAST_PAGE,
  page,
});

export const setActiveCurrency = currency => ({
  type: types.SET_ACTIVE_CURRENCY,
  payload: currency,
});
