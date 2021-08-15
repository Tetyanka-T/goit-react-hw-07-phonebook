import { Toaster } from 'react-hot-toast';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { ContactsPage } from 'pages/ContactsPage';
import { CreateContactPage } from 'pages/CreateContactPage';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';

export const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/contacts" exact>
            <ContactsPage />
          </Route>
          <Route path="/contacts/create">
            <CreateContactPage />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Toaster position="top-center" />
      </Container>
    </>
  );
};

// import { Toaster } from 'react-hot-toast';

// import Container from './components/Container/Container';
// import Form from './components/Form/Form';
// import ContactList from 'components/Contact/Contacts';
// import Filter from 'components/Filter/Filter';

// function App() {
//   return (
//     <div>
//       <Container>
//         <Toaster />
//         <h1>Phonebook</h1>
//         <Form />
//         <h2>Contacts</h2>
//         <Filter />
//         <ContactList />
//       </Container>
//     </div>
//   );
// }

// export default App;
