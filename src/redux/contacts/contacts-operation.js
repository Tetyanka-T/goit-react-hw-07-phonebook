import axios from 'axios';
import * as contactActions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3000';

export const fetchContacts = () => async dispatch => {
  dispatch(contactActions.fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');

    dispatch(contactActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactActions.fetchContactsError(error));
  }
};

export const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(contactActions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(contactActions.addContactSuccess(data)))
    .catch(error => dispatch(contactActions.fetchContactsError(error)));
};

export const deleteContact = contactId => dispatch => {
  dispatch(contactActions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(contactActions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(contactActions.deleteContactError(error)));
};
