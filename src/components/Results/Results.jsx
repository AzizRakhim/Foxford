import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Results.scss";
import useIelts from '../../store/ielts';

function Results() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={"slider-btn"}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className='bx bx-chevron-left' ></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={"prev-btn"}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className='bx bx-chevron-right' ></i>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // STORE

  const ielts = useIelts((state) => state.ielts);

  return (
    <section id="results" className='results'>
      <div className="container">
        <h2 className='results__title text-center'>
          Our students
        </h2>
        <p className='results__text text-center general-text'>
          Our students won GRANTS to TOP universities in the world. They got accepted to international universities in the USA and other countries and got up to 8.5 IELTS scores. Many of our students are students of Westminster, MDIST and other universities in Uzbekistan.
        </p>
        <Slider {...settings} className="results__list">
          {ielts.map(item => {
            return (
              <div className='results__item' key={item.id}>
                <div className='results__inner d-flex col-12'>
                  <div className='results__img-box col-6'>
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className='results__content col-6'>
                    <span className='results__name'>
                      {item.name} <br /> {item.lastname}
                    </span>
                    <ul className='results__inner-list list-unstyled'>
                      <li className="results__inner-item d-flex align-items-center justify-content-between">
                        <span className='results__section'>
                          Listening:
                        </span>
                        <span className='results__score'>
                          {item.listening}
                        </span>
                      </li>
                      <li className="results__inner-item d-flex align-items-center justify-content-between">
                        <span className='results__section'>
                          Reading:
                        </span>
                        <span className='results__score'>
                          {item.reading}
                        </span>
                      </li>
                      <li className="results__inner-item d-flex align-items-center justify-content-between">
                        <span className='results__section'>
                          Writing:
                        </span>
                        <span className='results__score'>
                          {item.writing}
                        </span>
                      </li>
                      <li className="results__inner-item d-flex align-items-center justify-content-between">
                        <span className='results__section'>
                          Speaking:
                        </span>
                        <span className='results__score'>
                          {item.speaking}
                        </span>
                      </li>
                    </ul>
                    <div className='results__band-score'>
                      <span className='results__band-score-text'>
                        Bandscore:
                      </span>
                      <span className='results__real-band-score'>
                        7.5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default Results
