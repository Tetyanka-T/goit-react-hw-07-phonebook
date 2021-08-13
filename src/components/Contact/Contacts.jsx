import { useSelector, useDispatch } from 'react-redux';

// import { deleteContact } from 'redux/contacts/contacts-actions';
// import { getVisibleContact } from 'redux/contacts/contacts-selectors';
import { getVisibleContact, deleteContact } from 'redux/contacts';
import s from 'components/Contact/Contacts.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));
  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <li className={s.item} key={id}>
          {name + ': ' + number}
          <button className={s.button} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
