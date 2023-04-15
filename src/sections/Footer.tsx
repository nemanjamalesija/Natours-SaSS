import logoGreen2x from '../img/logoGreen2x.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo-box'>
        <img
          src={logoGreen2x}
          alt='Full logo'
          className='footer__logo u-margin-bottom-big'
        />
      </div>
      <div className='row row__col--2 '>
        <div className='col-footer col-1-of-2'>
          <div className='footer__navigation'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Company
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Contact us
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Careers
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Privacy
                </a>
              </li>
              <li className='footer__item'>
                <a href='#' className='footer__link'>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-footer col-2-of-2'>
          <p className='footer__copyright'>
            Built by &nbsp;
            <a href='#' className='footer__link'>
              Nemanja Malesija &nbsp;
            </a>
            for his SAAS practice project &nbsp;
            <a href='#' className='footer__link'>
              Natours &nbsp;
            </a>
            Advanced CSS and SASS course by Jonas Schmedtmann.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
