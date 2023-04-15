import logoWhite from '../img/logoWhite.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo-box'>
        <img className='header__logo' src={logoWhite} alt='logo' />
      </div>
      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>Outdoors</span>
          <span className='heading-primary--sub'>Is Where life happens</span>
        </h1>
        <a href='#section-tours' className='btn btn--white'>
          Discover our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
