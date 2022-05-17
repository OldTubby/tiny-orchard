import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span className='tinyOrchard'>Tiny Orchard</span>
      </h1>
      <p className={headerStyles.description}>Learn stuff about things</p>
    </div>
  );
};

export default Header;
