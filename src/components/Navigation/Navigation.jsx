import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>
      <NavLink
        exact
        to="/contacts"
        className={s.link}
        activeClassName={s.activeLink}
      >
        Contacts
      </NavLink>
      <NavLink
        to="/contacts/create"
        className={s.link}
        activeClassName={s.activeLink}
      >
        Create contact
      </NavLink>
    </nav>
  );
};

export default Navigation;
