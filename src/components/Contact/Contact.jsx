import React from 'react';
import "./Contact.scss";
import logo from "../../assets/images/logo.jpg";

function Contact() {
  return (
    <section id="contact" className='contact'>
      <div className="container">
        <h2 className='contact__title text-center'>
          Welcome to our learning centre!
        </h2>
        <p className='contact__text general-text text-center'>
          Leave your details to enroll in our English classes and check your English level
        </p>
        <ul className='contact__list list-unstyled'>
          <li className="contact__item col-6">
            <form action="/" className='contact__form'>
              <div className='contact__input-holder'>
                <input type="text" className='contact__input' placeholder='Name...' />
              </div>
              <div className='contact__input-holder'>
                <input type="text" className='contact__input' placeholder='Surname...' />
              </div>
              <div className='contact__input-holder'>
                <input type="tel" className='contact__input' placeholder='Tel...' />
              </div>
              <div className='contact__input-holder'>
                <textarea className='contact__input' name="suggestions" id="suggestions" cols="30" rows="3" placeholder='Thoughts and suggestions' />
              </div>
              <button className='contact__btn'>
                Send
              </button>
            </form>
            <p className='text-center contact__info'>
              <i className='bx bx-info-circle'></i>
              Your data will not be given to third parties
            </p>
          </li>
          <li className="contact__item col-6">
            <img src={logo} alt="Logo" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
