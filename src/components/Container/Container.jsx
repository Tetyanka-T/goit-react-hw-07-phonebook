import s from 'components/Container/Container.module.css';

const Container = ({ children }) => {
  return <section className={s.container}>{children}</section>;
};

export default Container;
