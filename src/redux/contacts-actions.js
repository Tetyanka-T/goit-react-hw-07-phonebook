import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/changeFilter');

//redux
// import { nanoid } from 'nanoid';
// import { ADD, DELETE, CHANGE_FILTER } from './contacts-types';

// export const addContact = task => ({
//   type: ADD,
//   payload: {
//     ...task,
//     id: nanoid(),
//   },
// });

// export const deleteContact = contactId => ({
//   type: DELETE,
//   payload: contactId,
// });

// export const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });
