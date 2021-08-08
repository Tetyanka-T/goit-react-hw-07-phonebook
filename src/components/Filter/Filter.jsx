import { useSelector, useDispatch } from 'react-redux';

import { changeFilter } from 'redux/contacts-actions';

import s from 'components/Filter/Filter.module.css';
import { getFilter } from 'redux/contacts-selectors';

const Filter = () => {
  const value = useSelector(getFilter);

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

//with connect
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { changeFilter } from '../../redux/contacts-actions';
// import s from 'components/Filter/Filter.module.css';

// const Filter = ({ value, onChange }) => {
//   return (
//     <div>
//       <h3 className={s.title}>Find contacts by name</h3>
//       <input
//         className={s.input}
//         type="text"
//         value={value}
//         onChange={onChange}
//       />
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
