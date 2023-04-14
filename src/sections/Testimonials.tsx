import FirstTestimonial from '../components/FirstTestimonial';
import SecondTestimonial from '../components/SecondTestimonial';
import videoMP4 from '../img/videoMP4.mp4';
import videoWEBM from '../img/videoWEBM.webm';

const Testimonials = () => {
  return (
    <section className='section-stories'>
      <div className='bg-video'>
        <video className='bg-video__content' autoPlay muted loop>
          <source src={videoMP4} type='video/mp4'></source>
          <source src={videoWEBM} type='video/webm'></source>
          Your browser is not supported
        </video>
      </div>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>We make people genuinely happy</h2>
      </div>
      <div className='row'>
        <div>
          <FirstTestimonial />
          <SecondTestimonial />
        </div>
        <div className='container-align-text'>
          <a href='#' className='btn-text btn-text-testimonials'>
            Read all stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
