const BookForm = () => {
  return (
    <section className='section-book'>
      <div className='row'>
        <div className='book'>
          <div className='book__form--container'>
            <form action='#' className='book-form'>
              <div className='u-margin-bottom-medium'>
                <h2 className='heading-secondary'>Start Booking Now</h2>
              </div>
              <div className='book-form__group'>
                <input
                  type='text'
                  className='book-form__input'
                  placeholder='Full Name'
                  required
                  id='name'
                />
                <label htmlFor='name' className='book-form__label'>
                  Full Name
                </label>
              </div>
              <div className='book-form__group'>
                <input
                  type='email'
                  className='book-form__input'
                  placeholder='E mail'
                  required
                  id='email'
                />
                <label htmlFor='email' className='book-form__label'>
                  E mail
                </label>
              </div>
            </form>
            <div className='book-form__group'>
              <div className='book-form__radio-group'>
                <input
                  type='radio'
                  className='book-form__radio-input'
                  id='small'
                  name='size'
                />
                <label htmlFor='small' className='book-form__radio-label'>
                  <span className='book-form__radio-button'></span>
                  Small tour group
                </label>
              </div>
              <div className='book-form__radio-group'>
                <input
                  type='radio'
                  className='book-form__radio-input'
                  id='large'
                  name='size'
                />
                <label htmlFor='large' className='book-form__radio-label'>
                  <span className='book-form__radio-button'></span>
                  Large tour group
                </label>
              </div>
              <div className='book-form__group'>
                <button type='submit' className='button btn btn--green'>
                  Next step &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookForm;
