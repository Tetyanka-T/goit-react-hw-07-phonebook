import { configureStore } from '@reduxjs/toolkit';
import contactReducer from 'redux/contacts/slice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';

// import { contactApi } from './contacts/slice';

// export const store = configureStore({
//   reducer: {
//     [contactApi.reducerPath]: contactApi.reducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),

//     contactApi.middleware,
//   ],
// });

// setupListeners(store.dispatch);

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import contactsReduser from './contacts/contacts-reduser';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

// const store = configureStore({
//   reducer: {
//     contacts: contactsReduser,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// export default store;
