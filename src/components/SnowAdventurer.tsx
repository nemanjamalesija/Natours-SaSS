import React from 'react';

const SnowAdventurer = () => {
  return (
    <div className='col-3-of-3'>
      <div className='card'>
        <div className='card__side card__side--front'>
          <div className='card__picture card__picture--3'> &nbsp; </div>
          <h4 className='card__heading'>
            <span className='card__heading-span card__heading-span--3'>
              The snow adventurer
            </span>
          </h4>
          <div className='card__details'>
            <ul>
              <li>5 day tour</li>
              <li>Up to 15 people</li>
              <li>3 tour guides</li>
              <li>Sleep in provided tents</li>
              <li>Difficulty: hard</li>
            </ul>
          </div>
        </div>
        <div className='card__side card__side--back card__side--back-3'>
          <div className='card__cta'>
            <div className='card__price-box u-margin-bottom-big'>
              <p className='card__price-only'>Only</p>
              <p className='card__price-value'>$897</p>
            </div>
            <a href='#popup' className='btn btn--white'>
              Book now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnowAdventurer;
