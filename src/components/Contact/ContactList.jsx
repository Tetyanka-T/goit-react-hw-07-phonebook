import { useSelector, useDispatch } from 'react-redux';

import { contactOperations, contactSelectors } from 'redux/contacts';
import s from 'components/Contact/Contacts.module.css';

const ContactList = () => {
  const contacts = useSelector(contactSelectors.getVisibleContact);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactOperations.deleteContact(id));

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
