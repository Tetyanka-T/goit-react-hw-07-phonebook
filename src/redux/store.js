import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReduser from './contacts-reduser';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const contactPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};
const store = configureStore({
  reducer: {
    contacts: persistReducer(contactPersistConfig, contactsReduser),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

export default store;

// redux
// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReduser from './contacts-reduser';

// const rootReducer = combineReducers({
//   contacts: contactsReduser,
// });
// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
