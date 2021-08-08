import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts-actions';
import { getVisibleContact } from 'redux/contacts-selectors';
import s from 'components/Contact/Contact.module.css';

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

//with connect
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { deleteContact } from '../../redux/contacts-actions';
// import s from 'components/Contact/Contact.module.css';

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <ul className={s.list}>
//       {contacts.map(({ name, number, id }) => (
//         <li className={s.item} key={id}>
//           {name + ': ' + number}
//           <button className={s.button} onClick={() => onDeleteContact(id)}>
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// const showVisibleContact = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = state => {
//   const { items, filter } = state.contacts;
//   const visibleContacts = showVisibleContact(items, filter);
//   return {
//     contacts: visibleContacts,
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// ContactList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
// };
