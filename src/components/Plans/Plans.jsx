import React from 'react';
import "./Plans.scss";

function Plans() {
  return (
    <section id='plans' className='plans'>
      <div className="container">
        <h2 className='plans__title text-center'>
          Here are all our plans
        </h2>
        <p className='plans__text general-text text-center'>
          We offer courses for everyone, regardless of their age and gender. Just go and choose the plan that most suits you.
        </p>
        <ul className='plans__list list-unstyled p-0 m-0'>
          <li className="plans__item">
            <h3 className='plans__item-title'>
              Kids
            </h3>
            <p className='plans__item-text general-text'>
              This programme is aimed for children around the age 12 and 14.
            </p>
            <div className='plans__money-box'>
              30$ <span className='plants__money-month'>
                /3 months
              </span>
            </div>
            <ul className='plants__item-list list-unstyled p-0 m-0'>
              <li className="plants__item-item">
                Homework Check
              </li>
              <li className="plants__item-item">
                Additional Practical Tasks
              </li>
              <li className="plants__item-item">
                Personal advice from teachers
              </li>
            </ul>
            <div className='d-flex justify-content-center'>
              <button className='general-btn plans__btn'>
                Get Started
              </button>
            </div>
          </li>
          <li className="plans__item">
            <h3 className='plans__item-title'>
              General
            </h3>
            <p className='plans__item-text general-text'>
              This is for people who doesn't know a thing about English
            </p>
            <div className='plans__money-box'>
              40$ <span className='plants__money-month'>
                /3 months
              </span>
            </div>
            <ul className='plants__item-list list-unstyled p-0 m-0'>
              <li className="plants__item-item">
                Homework Check
              </li>
              <li className="plants__item-item">
                Additional Practical Tasks
              </li>
              <li className="plants__item-item">
                Personal advice from teachers
              </li>
            </ul>
            <div className='d-flex justify-content-center'>
              <button className='general-btn plans__btn'>
                Get Started
              </button>
            </div>
          </li>
          <li className="plans__item">
            <h3 className='plans__item-title'>
              Academic
            </h3>
            <p className='plans__item-text general-text'>
              A little bit advanced. Hence, basic knowledge of English is required
            </p>
            <div className='plans__money-box'>
              50$ <span className='plants__money-month'>
                /3 months
              </span>
            </div>
            <ul className='plants__item-list list-unstyled p-0 m-0'>
              <li className="plants__item-item">
                Homework Check
              </li>
              <li className="plants__item-item">
                Additional Practical Tasks
              </li>
              <li className="plants__item-item">
                Personal advice from teachers
              </li>
            </ul>
            <div className='d-flex justify-content-center'>
              <button className='general-btn plans__btn'>
                Get Started
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Plans
