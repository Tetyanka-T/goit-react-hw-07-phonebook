import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../../redux/contacts-actions';
import s from 'components/Filter/Filter.module.css';

const Filter = ({ value, onChange }) => {
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

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
