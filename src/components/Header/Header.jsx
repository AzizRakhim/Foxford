import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Header.scss";

function Header() {
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <header className={`header ${navbar && 'active'}`}>
      <div className="container">
        <div className='header__container d-flex align-items-center'>
          <div className='header__logo-box'>
            <Link to="/" className={`header__logo-link ${navbar && 'yLink'}`}>
              FoxFord
            </Link>
          </div>
          <nav className={`header__nav flex-grow-1 ${menu && 'header__nav-show'}`}>
            <button className='header__menu-x-btn' onClick={() => setMenu(false)}>
              <i className='bx bx-x'></i>
            </button>
            <ul className='header__list p-0 m-0 d-flex align-items-center list-unstyled'>
              <li className="header__item">
                <a href="#plans" className={`header__item-link ${navbar && 'white-me'}`}>
                  Courses
                </a>
              </li>
              <li className="header__item">
                <NavLink className={`header__item-link ${navbar && 'white-me'}`} to="/features">
                  Features
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink className={`header__item-link ${navbar && 'white-me'}`} to="/about">
                  About
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink className={`header__item-link ${navbar && 'white-me'}`} to="/pricing">
                  Pricing
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className='d-flex align-items-center'>
            <div className={`header__settings d-flex align-items-center ${menu && 'header__nav-show'}`}>
              <div className='header__lang-box d-flex align-items-center'>
                <label htmlFor="lang" className={`header__lang-label d-flex align-items-center justify-content-center ${navbar && 'lang'}`}>
                  <i className='bx bx-globe'></i>
                </label>
                <select name="lang" id="lang" className={`header__select ${navbar && 'lang'}`}>
                  <option value="eng">English</option>
                  <option value="uz">Uzbek</option>
                  <option value="ru">Russian</option>
                </select>
              </div>
              <div className='header__btn-box d-flex align-items-center'>
                <button className='header__btn'>
                  Sign up
                </button>
              </div>
            </div>
            <button className='header__menu-btn' onClick={() => setMenu(true)}>
              <i className='bx bx-menu'></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
