import SeaExplorer from '../components/SeaExplorer';
import ForestHiker from '../components/ForestHiker';
import SnowAdventurer from '../components/SnowAdventurer';

const Tours = () => {
  return (
    <section className='section-tours'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Most Popuar Tours</h2>
      </div>
      <div className='row row-col-3'>
        <SeaExplorer />
        <ForestHiker />
        <SnowAdventurer />
      </div>
    </section>
  );
};

export default Tours;
