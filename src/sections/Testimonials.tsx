import FirstTestimonial from '../components/FirstTestimonial';
import SecondTestimonial from '../components/SecondTestimonial';

const Testimonials = () => {
  return (
    <section className='section-stories'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>We make people genuinely happy</h2>
      </div>
      <div className='row'>
        <FirstTestimonial />
        <SecondTestimonial />
      </div>
    </section>
  );
};

export default Testimonials;
