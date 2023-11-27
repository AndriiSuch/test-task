import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../rootReducer';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'authType',
  storage: AsyncStorage,
  whitelist: ['currency'],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, applyMiddleware(thunk));

const persistor = persistStore(store);
export {persistor, store};
