import React from "react";
import Header from "../Header/Header";
import "./Hero.scss";
import heroImg from "../../assets/images/hero-img.png";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation(["home"]);

  return (
    <div className="hero" id="hero">
      <Header />
      <div className="hero__wrapper">
        <div className="container">
          <div className="hero__container d-flex align-items-center">
            <div className="hero__content">
              <h2 className="hero__title">{t("title")}</h2>
              <p className="general-text hero__text">{t("description")}</p>
              <div className="hero__btns d-flex align-items-center">
                <button className="general-btn hero__btn--colored">
                  {t("start")}
                </button>
                <button className="hero__btn--simple">{t("discount")}</button>
              </div>
            </div>
            <div className="hero__img">
              <img src={heroImg} alt="boy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
