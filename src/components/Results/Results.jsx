import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Results.scss";
import useIelts from "../../store/ielts";
import iroda from "../../assets/images/iroda.jpg";
import { useTranslation } from "react-i18next";

function Results() {
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className={"slider-btn"}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="bx bx-chevron-left"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className={"prev-btn"}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="bx bx-chevron-right"></i>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  // STORE

  const ielts = useIelts((state) => state.ielts);

  const { t } = useTranslation(["results"]);

  return (
    <section id="results" className="results">
      <div className="container">
        <h2 className="results__title text-center">{t("title")}</h2>
        <p className="results__text text-center general-text">{t("text")}</p>
        <Slider {...settings} className="results__list position-relative pt-5">
          {ielts.map((item) => {
            return (
              <div className="results__item" key={item.id}>
                <div className="results__inner d-flex col-12 flex-wrap">
                  <div className="results__img-box col-12 col-lg-12 col-xl-6">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="results__content col-12 col-lg-12 col-xl-6">
                    <span className="results__name">
                      {item.name} <br /> {item.lastname}
                    </span>
                    <ul className="results__inner-list list-unstyled">
                      <li className="results__inner-item d-flex align-items-center justify-content-between">
                        <span className="results__section">Listening:</span>
                        <span className="results__score">{item.listening}</span>
                      </li>
                      <li className="results__inner-item d-flex align-items-center justify-content-between">
                        <span className="results__section">Reading:</span>
                        <span className="results__score">{item.reading}</span>
                      </li>
                      <li className="results__inner-item d-flex align-items-center justify-content-between">
                        <span className="results__section">Writing:</span>
                        <span className="results__score">{item.writing}</span>
                      </li>
                      <li className="results__inner-item d-flex align-items-center justify-content-between">
                        <span className="results__section">Speaking:</span>
                        <span className="results__score">{item.speaking}</span>
                      </li>
                    </ul>
                    <div className="results__band-score">
                      <span className="results__band-score-text">
                        Bandscore:
                      </span>
                      <span className="results__real-band-score">
                        {item.bandscore}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="results__item">
            <div className="results__inner d-flex col-12 flex-wrap">
              <div className="results__img-box col-12 col-lg-12 col-xl-6">
                <img src={iroda} alt={"Iroda"} />
              </div>
              <div className="results__content col-12 col-lg-12 col-xl-6">
                <span className="results__name">
                  {"Irodaxon"} <br /> Xusniddinova
                </span>
                <ul className="results__inner-list list-unstyled">
                  <li className="results__inner-item d-flex align-items-center justify-content-between">
                    <span className="results__section">Listening:</span>
                    <span className="results__score">21,0</span>
                  </li>
                  <li className="results__inner-item d-flex align-items-center justify-content-between">
                    <span className="results__section">Reading:</span>
                    <span className="results__score">17,0</span>
                  </li>
                  <li className="results__inner-item d-flex align-items-center justify-content-between">
                    <span className="results__section">Writing:</span>
                    <span className="results__score">18,75</span>
                  </li>
                  <li className="results__inner-item d-flex align-items-center justify-content-between">
                    <span className="results__section">Speaking:</span>
                    <span className="results__score">26,0</span>
                  </li>
                </ul>
                <div className="results__band-score">
                  <span className="results__band-score-text">Bandscore:</span>
                  <span className="results__real-band-score">101,75</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Results;
