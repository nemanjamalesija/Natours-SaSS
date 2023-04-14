import React from 'react';
import nat8 from '../img/nat8.jpg';

const FirstTestimonial = () => {
  return (
    <div className='story'>
      <figure className='story__shape'>
        <img src={nat8} alt='Person on a tour' className='story__image' />
      </figure>
      <div className='story__text'>
        <h3 className='heading-tertiary u-margin-bottom-small'>
          I had the best weekend ever with my family
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

export default FirstTestimonial;
