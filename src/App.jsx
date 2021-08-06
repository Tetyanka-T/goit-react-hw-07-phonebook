// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import toast, { Toaster } from 'react-hot-toast';
// import useLocalStorage from 'components/hooks/useLocalStorage';

import Container from './components/Container/Container';
import Form from './components/Form/FormHook';
import ContactList from 'components/Contact/Contacts';
import Filter from 'components/Filter/Filter';

function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = task => {
  //   const searchSameName = contacts
  //     .map(contact => contact.name)
  //     .includes(task.name);

  //   if (searchSameName) {
  //     toast.error(`${task.name} is already in contacts`);
  //   } else if (task.name.length === 0) {
  //     toast.error('Fields must be filled!');
  //   } else {
  //     const contact = {
  //       ...task,
  //       id: nanoid(),
  //     };

  //     setContacts(contacts => [contact, ...contacts]);
  //     toast.success('Done');
  //   }
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts =>
  //     contacts.filter(contact => contact.id !== contactId),
  //   );
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const showVisibleContact = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // const visibleContacts = showVisibleContact();

  return (
    <div>
      <Container>
        {/* <Toaster /> */}
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </div>
  );
}

export default App;
