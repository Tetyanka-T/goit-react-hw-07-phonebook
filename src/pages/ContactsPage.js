import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactOperations, contactSelectors } from 'redux/contacts';
import { Spinner } from 'components/Loader/Loader';
import ContactList from 'components/Contact/ContactList';
import Filter from 'components/Filter/Filter';

export const ContactsPage = () => {
  const contacts = useSelector(contactSelectors.getContacts);
  const isLoading = useSelector(contactSelectors.getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContactsList());
  }, [dispatch]);

  return (
    <div>
      <Filter />
      {contacts && <ContactList />}
      {isLoading && <Spinner />}
    </div>
  );
};
