import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Header</span>
      </h1>
      <p className={headerStyles.description}>
        This is where you learn stuff from Renee
      </p>
    </div>
  );
};

export default Header;
