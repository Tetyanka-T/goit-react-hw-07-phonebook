export {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './contacts-actions';
export {
  getContacts,
  getFilter,
  getVisibleContact,
} from './contacts-selectors';
export { addContact, deleteContact, fetchContacts } from './contacts-operation';
