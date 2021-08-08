import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import toast from 'react-hot-toast';
import * as actions from './contacts-actions';

const checkContact = (contacts, name) => {
  const searchSameName = contacts.map(contact => contact.name).includes(name);

  if (searchSameName) {
    toast.error(`${name} is already in contacts`);
    return searchSameName;
  }
};

const addContact = (state, { payload }) => {
  const includedContact = checkContact(state, payload.name);

  if (includedContact) return state;

  return [...state, payload];
};

export const items = createReducer([], {
  [actions.addContact]: addContact,
  [actions.deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

export const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});

//redux
// import { combineReducers } from 'redux';
// import { ADD, DELETE, CHANGE_FILTER } from './contacts-types';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];

//     case DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
