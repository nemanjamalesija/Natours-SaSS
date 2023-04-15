import React from 'react';

const Navigation = () => {
  const [isNavActive, setisNavActive] = React.useState(false);

  return (
    <div className='navigation'>
      <button
        className={
          isNavActive
            ? 'navigation__button navigation__button--active'
            : 'navigation__button '
        }
        onClick={(e) => {
          e.preventDefault();
          setisNavActive(!isNavActive);
        }}
      >
        <span className='navigation__icon'>&nbsp;</span>
      </button>
      <div
        className={
          isNavActive
            ? 'navigation__background'
            : 'navigation__background navigation__background--hidden'
        }
      ></div>
      &nbsp;
      <nav
        className={
          isNavActive ? 'navigation__nav' : 'navigation__nav navigation__nav--hidden'
        }
      >
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              <span>01</span>
              About natours
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              <span>02</span>
              Popular tours
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              <span>03</span>
              Stories
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              <span>41</span>
              Your own benefits
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              <span>05</span>
              Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
