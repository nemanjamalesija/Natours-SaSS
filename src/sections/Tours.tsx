import SeaExplorer from '../components/SeaExplorer';
import ForestHiker from '../components/ForestHiker';
import SnowAdventurer from '../components/SnowAdventurer';

const Tours = () => {
  return (
    <section className='section-tours'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Most Popuar Tours</h2>
      </div>
      <div className='row row__col--3'>
        <SeaExplorer />
        <ForestHiker />
        <SnowAdventurer />
        <div className='container-align-text u-margin-top-huge'>
          <a href='#' className='btn btn--green'>
            Discover all tours
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tours;
