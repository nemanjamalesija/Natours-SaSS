const ForestHiker = () => {
  return (
    <div className='col-2-of-3'>
      <div className='card'>
        <div className='card__side card__side--front'>
          <div className='card__picture card__picture--2'> &nbsp; </div>
          <h4 className='card__heading'>
            <span className='card__heading-span card__heading-span--2'>
              The forest hiker
            </span>
          </h4>
          <div className='card__details'>
            <ul>
              <li>7 day tour</li>
              <li>Up to 40 people</li>
              <li>6 tour guides</li>
              <li>Sleep in provided tents</li>
              <li>Difficulty: medium</li>
            </ul>
          </div>
        </div>
        <div className='card__side card__side--back card__side--back-2'>
          <div className='card__cta'>
            <div className='card__price-box u-margin-bottom-big'>
              <p className='card__price-only'>Only</p>
              <p className='card__price-value'>$497</p>
            </div>
            <a href='#' className='btn btn--white'>
              Book now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForestHiker;
