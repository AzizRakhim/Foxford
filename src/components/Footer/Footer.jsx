import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className='footer__top d-flex'>
          <div className='footer__info'>
            <div className='footer__logo-box'>
              <Link to={"/"} className="footer__logo-link">
                foxford
              </Link>
            </div>
            <p className='footer__text'>
              But i must explain to you how all this mistaken idea denouncing pleasure and praising pain was born and i will give you
            </p>
            <button className='footer__btn general-btn'>
              Join
            </button>
          </div>
          <nav className='footer__nav'>
            <h3 className='footer__list-title'>
              Platform
            </h3>
            <ul className='footer__list list-unstyled p-0 m-0'>
              <li className="footer__item">
                <Link to={"/overview"} className="footer__item-link">
                  Overview
                </Link>
              </li>
              <li className="footer__item">
                <Link to={"/overview"} className="footer__item-link">
                  Features
                </Link>
              </li>
              <li className="footer__item">
                <Link to={"/overview"} className="footer__item-link">
                  About
                </Link>
              </li>
              <li className="footer__item">
                <Link to={"/overview"} className="footer__item-link">
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
          <div className='footer__div mr'>
            <h3 className='footer__list-title'>
              Help
            </h3>
            <ul className='footer__list list-unstyled p-0 m-0'>
              <li className="footer__item">
                <Link to={"/overview"} className="footer__item-link">
                  How does it work?
                </Link>
              </li>
              <li className="footer__item">
                <Link to={"/overview"} className="footer__item-link">
                  Where to ask questions?
                </Link>
              </li>
              <li className="footer__item">
                <Link to={"/overview"} className="footer__item-link">
                  How to pay?
                </Link>
              </li>
              <li className="footer__item">
                <Link to={"/overview"} className="footer__item-link">
                  What is needed for this?
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer__div ml'>
            <h3 className='footer__list-title'>
              Contacts
            </h3>
            <ul className='footer__list list-unstyled p-0 m-0'>
              <li className="footer__item">
                <Link to={"/overview"} className="footer__item-link">
                  (716) 532-3577
                </Link>
              </li>
              <li className="footer__item">
                <Link to={"/overview"} className="footer__item-link">
                  116 Archer Rd <br />
                  Broadalbin, New York(NY), 12025
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__bottom d-flex justify-content-between'>
          <div className='footer__rights'>
            @FOXFORD 2015 - 2022. All rights reserved.
          </div>
          <div className='footer__social-links'>
            <Link to={"/"} className='footer__social-btn'>
              <i className='bx bxl-telegram'></i>
              Telegram: @Foxford_time
            </Link>
            <div className='footer__me'>
              Designed and created by <Link to={"/"} className={"footer__me-colored"}>Aziz Rakhim</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
