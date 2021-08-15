import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/slice';
import { contactSelectors } from 'redux/contacts';
import s from 'components/Filter/Filter.module.css';

const Filter = () => {
  const value = useSelector(contactSelectors.getFilter);

  const dispatch = useDispatch();

  const onChange = e => dispatch(changeFilter(e.currentTarget.value));
  return (
    <div>
      <h3 className={s.title}>Find contacts by name</h3>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
