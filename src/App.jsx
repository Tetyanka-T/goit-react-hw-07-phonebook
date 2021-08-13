import { Toaster } from 'react-hot-toast';

import Container from './components/Container/Container';
import Form from './components/Form/Form';
import ContactList from 'components/Contact/Contacts';
import Filter from 'components/Filter/Filter';

function App() {
  return (
    <div>
      <Container>
        <Toaster />
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
