import React from 'react';
import user from "../../assets/images/user.svg";
import check from "../../assets/images/circle-wavy-check.svg";
import cap from "../../assets/images/graduation-cap.svg";
import card from "../../assets/images/identification-card.svg";
import users from "../../assets/images/users.svg";
import handshake from "../../assets/images/handshake.svg";
import "./Advantages.scss";

function Advantages() {
  return (
    <section id={"advantages"} className="advantages">
      <div className="container">
        <h2 className='advantages__title text-center'>
          The advantages of “FoxFord” learning center
        </h2>
        <p className='advantages__text general-text text-center'>
          Each of our students will have the following advantages
        </p>
        <ul className='advantages__list d-flex flex-wrap list-unstyled'>
          <li className="advantages__item d-flex col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className='advantages__img-box'>
              <img src={user} alt="user" />
            </div>
            <div className='advantages__content general-text'>
              Tutors with 3-5 years of experience in preparing students for exams. Students IELTS scores are up to 8.5.
            </div>
          </li>
          <li className="advantages__item d-flex col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className='advantages__img-box'>
              <img src={check} alt="check" />
            </div>
            <div className='advantages__content general-text'>
              The only strong teaching system in Yangikurgan and one of the best in whole Uzbekistan.
            </div>
          </li>
          <li className="advantages__item d-flex col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className='advantages__img-box'>
              <img src={cap} alt="cap" />
            </div>
            <div className='advantages__content general-text'>
              Support. The opportunity to have free additional lessons when the group does not understand certain topics
            </div>
          </li>
          <li className="advantages__item d-flex col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className='advantages__img-box'>
              <img src={card} alt="card" />
            </div>
            <div className='advantages__content general-text'>
              A special online platform for parents and students to monitor their exam results and stay in touch with FoxFord news
            </div>
          </li>
          <li className="advantages__item d-flex col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className='advantages__img-box'>
              <img src={users} alt="users" />
            </div>
            <div className='advantages__content general-text'>
              Cosy co-working spaces open 24/7 for students who want to stay and study after the classes
            </div>
          </li>
          <li className="advantages__item d-flex col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className='advantages__img-box'>
              <img src={handshake} alt="handshake" />
            </div>
            <div className='advantages__content general-text'>
              Job opportunities - Students who have mastered the English language well have the opportunity to work at FoxFord
            </div>
          </li>
        </ul>
        <div className='w-100 d-flex'>
          <button className='general-btn advantages__btn mt-5'>
            Enroll in the course
          </button>
        </div>
      </div>
    </section>
  )
}

export default Advantages
