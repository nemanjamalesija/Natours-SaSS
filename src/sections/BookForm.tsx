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
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookForm;
