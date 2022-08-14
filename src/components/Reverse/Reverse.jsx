import React from 'react';
import "./Reverse.scss";
import improvement from "../../assets/images/improvement.png";
import tree from "../../assets/images/tree.png";

function Reverse() {
  return (
    <section className='reverse' id='reverse'>
      <div className="container">
        <ul className='reverse__list list-unstyled p-0 m-0'>
          <li className="reverse__item d-flex align-items-center">
            <div className='reverse__img-box'>
              <img src={improvement} alt="improvement" />
            </div>
            <div className='reverse__content'>
              <h2 className='reverse__title'>
                We have been
                improving our teaching process <span className='reverse__title--pink'>for many years</span>
              </h2>
              <p className='general__text reverse__text'>
                It's been 5 years since we began our journey. Since than we have taught thousands of students and been growing in every way possible. Especially, we paid lots of attention to our teacher methods so as to make English easy to learn for everyone. So our teacher methods are state-of-the-art.
              </p>
              <button className='general-btn reverse__btn'>
                Get Started
              </button>
            </div>
          </li>
          <li className="reverse__item d-flex align-items-center">
            <div className='reverse__img-box'>
              <img src={tree} alt="practice" />
            </div>
            <div className='reverse__content'>
              <h2 className='reverse__title'>
                You can practice at any <span className='reverse__title--pink'>time convenient for you</span>
              </h2>
              <p className='general__text'>
                You can study at any time suitable for you. We offer courses around the clock. Takin into consideration your work and personal life, you can study either in the morning or in the evening.
              </p>
              <button className='general-btn reverse__btn'>
                Get Started
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Reverse
