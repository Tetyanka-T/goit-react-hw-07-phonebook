import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactsAPI } from 'services/contactApi';

export const fetchContactsList = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await ContactsAPI.fetchContactsList();

      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await ContactsAPI.createContact(contact);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await ContactsAPI.deleteContact(id);

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// import axios from 'axios';
// import * as contactActions from './contacts-actions';

// axios.defaults.baseURL = 'http://localhost:3000';

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactActions.fetchContactsRequest());
//   try {
//     const { data } = await axios.get('/contacts');

//     dispatch(contactActions.fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(contactActions.fetchContactsError(error));
//   }
// };

// export const addContact = (name, number) => dispatch => {
//   const contact = {
//     name,
//     number,
//   };

//   dispatch(contactActions.addContactRequest());

//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(contactActions.addContactSuccess(data)))
//     .catch(error => dispatch(contactActions.fetchContactsError(error)));
// };

// export const deleteContact = contactId => dispatch => {
//   dispatch(contactActions.deleteContactRequest());

//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(contactActions.deleteContactSuccess(contactId)))
//     .catch(error => dispatch(contactActions.deleteContactError(error)));
// };
