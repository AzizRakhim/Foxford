import React from 'react'
import Header from '../Header/Header';
import "./Hero.scss";
import heroImg from "../../assets/images/hero-img.png";

function Hero() {
  return (
    <div className='hero' id='hero'>
      <Header />
      <div className='hero__wrapper'>
        <div className="container">
          <div className='hero__container d-flex align-items-center'>
            <div className='hero__content'>
              <h2 className='hero__title'>
                Develop your skill without diligence
              </h2>
              <p className='general-text hero__text'>
                Over 5 years, more than 1,000 people studied at the "FoxFord" learning center
              </p>
              <div className='hero__btns d-flex align-items-center'>
                <button className='general-btn hero__btn--colored'>
                  Get Started
                </button>
                <button className='hero__btn--simple'>
                  Discount
                </button>
              </div>
            </div>
            <div className='hero__img'>
              <img src={heroImg} alt="boy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
