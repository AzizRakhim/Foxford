import React from 'react';
import "./Contact.scss";

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
            slaom
          </li>
          <li className="contact__item col-6">
            salom
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
