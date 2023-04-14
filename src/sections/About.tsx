import nat1Large from '../img/nat1.jpg';
import nat2Large from '../img/nat2.jpg';
import nat3Large from '../img/nat3.jpg';

const About = () => {
  return (
    <section className='section section-about'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Exciting tours for adventurous people</h2>
      </div>
      <div className='row row__col--2'>
        <div className='col-1-of-2'>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            You are going to fall in love with nature
          </h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vel eaque quae
            amet similique sint quos architecto qui voluptas, consequatur, accusamus,
            delectus.
          </p>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            Live adventures like you never have before
          </h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vel eaque quae
            amet similique sint quos architecto qui voluptas, consequatur.
          </p>
          <a href='#' className='btn-text'>
            Learn more &rarr;
          </a>
        </div>
        <div className='col-2-of-2'>
          <div className='composition'>
            <img
              src={nat1Large}
              alt='photo 1'
              className='composition__photo composition__photo--p1'
            />
            <img
              src={nat2Large}
              alt='photo 2'
              className='composition__photo composition__photo--p2'
            />
            <img
              src={nat3Large}
              alt='photo 3'
              className='composition__photo composition__photo--p3'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
