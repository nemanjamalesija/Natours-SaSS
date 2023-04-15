import nat8 from '../img/nat8.jpg';
import nat9 from '../img/nat9.jpg';

const PopUp = () => {
  return (
    <div className='popup' id='popup'>
      <div className='popup__content'>
        <div className='popup__left'>
          <img src={nat8} alt='Tour photo' className='popup__img' />
          <img src={nat9} alt='Tour photo' className='popup__img' />
        </div>
        <div className='popup__right'>
          <a href='#section-tours' className='popup__close'>
            &times;
          </a>
          <h2 className='heading_secondary u-margin-bottom-small'>Start booking now</h2>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            Important &ndash; Please read these terms before booking
          </h3>
          <p className='popup__text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eum
            consequatur officiis tempora natus ducimus, non voluptatum assumenda eligendi
            corporis nam expedita amet ea perspiciatis ex! Beatae, expedita dolore sint
            alias vitae repellat dolores explicabo ullam quis obcaecati odio corrupti
            voluptatibus exercitationem impedit rerum quod provident ducimus rem nihil
            libero sunt ratione nobis? Sapiente tenetur nobis, maiores beatae ab rem
            perspiciatis itaque est sunt dolorem ratione consequuntur labore saepe aliquid
            dolor nostrum dolore mollitia eius quam? Doloremque cupiditate mollitia soluta
            id, maxime autem, odit ipsum dolores corrupti similique nobis incidunt
            repudiandae aut. Nam quaerat laudantium in officiis vel iure voluptatibus
            deserunt quas sed, tenetur, fugiat excepturi eum inventore dolor eos ipsum
            facere vero, quibusdam exercitationem pariatur accusantium doloribus
            asperiores dignissimos rerum. Eligendi ad officiis qui deleniti nostrum alias
            vitae cupiditate. Odio officia error assumenda quam molestiae laudantium
            laborum cumque eum corrupti reiciendis voluptates iste, aut ducimus aspernatur
            iusto, veritatis cupiditate!
          </p>
          <a href='#' className='btn btn--green'>
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
