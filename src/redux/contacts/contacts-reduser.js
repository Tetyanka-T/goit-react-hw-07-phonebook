// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import toast from 'react-hot-toast';
// import * as contactActions from './contacts-actions';

// const checkContact = (contacts, name) => {
//   const searchSameName = contacts.map(contact => contact.name).includes(name);

//   if (searchSameName) {
//     toast.error(`${name} is already in contacts`);
//     return searchSameName;
//   }
// };

// const addContact = (state, { payload }) => {
//   const includedContact = checkContact(state, payload.name);

//   if (includedContact) return state;

//   return [...state, payload];
// };

// const items = createReducer([], {
//   [contactActions.fetchContactsSuccess]: (_, { payload }) => payload,
//   [contactActions.addContactSuccess]: addContact,
//   [contactActions.deleteContactSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filter = createReducer('', {
//   [contactActions.changeFilter]: (_, { payload }) => payload,
// });

// const error = createReducer(null, {});

// export default combineReducers({
//   items,
//   filter,
//   // loading,
//   error,
// });
