import nat9 from '../img/nat9.jpg';

const SecondTestimonial = () => {
  return (
    <div className='story'>
      <figure className='story__shape'>
        <img src={nat9} alt='Person on a tour' className='story__image' />
        <figcaption className='story__caption'>Jack Wilson</figcaption>
      </figure>
      <div className='story__text'>
        <h3 className='heading-tertiary u-margin-bottom-small'>
          WOW! MY LIFE IS COMPLETELY DIFFERENT NOW
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores magni culpa
          excepturi ad officiis voluptatum harum saepe, laudantium necessitatibus. Ipsum
          dolor sit amet consectetur, adipisicing elit. Dolores magni culpa excepturi ad
          officiis voluptatum harum saepe ipsum dolor sit amet consectetur, adipisicing
          elit.
        </p>
      </div>
    </div>
  );
};

export default SecondTestimonial;
