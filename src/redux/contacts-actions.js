import { nanoid } from 'nanoid';
import { ADD, DELETE, CHANGE_FILTER } from './contacts-types';

export const addContact = task => ({
  type: ADD,
  payload: {
    ...task,
    id: nanoid(),
  },
});

export const deleteContact = contactId => ({
  type: DELETE,
  payload: contactId,
});

export const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});
