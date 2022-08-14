import React from 'react';
import schedule from "../../assets/images/schedule.png";
import check from "../../assets/images/check.png";
import platform from "../../assets/images/platform.png";
import "./Better.scss";

function Better() {
  return (
    <section className='better' id='better'>
      <div className="container">
        <div className='better__container'>
          <ul className='better__list list-unstyled p-0 m-0'>
            <li className="better__item">
              <h3 className='better__list-title'>
                Why we are better than others
              </h3>
              <p className='better__text general-text pb-0'>
                Most of our students achieved an IELTS score of 7.0 or above on the first try itself
              </p>
            </li>
            <li className="better__item">
              <div className='schedule__holder'>
                <img src={schedule} alt="schedule" />
              </div>
              <h4 className='better__item-title'>
                Convenient study
                schedule
              </h4>
            </li>
            <li className="better__item">
              <div className='check__holder'>
                <img src={check} alt="check" />
              </div>
              <h4 className='better__item-title pl'>
                Checked
                homework
                by teachers
              </h4>
            </li>
            <li className="better__item">
              <div className='platform__holder'>
                <img src={platform} alt="platform" />
              </div>
              <h4 className='better__item-title'>
                Modern
                internet
                platform
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Better
