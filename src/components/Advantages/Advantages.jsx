import React from "react";
import user from "../../assets/images/user.svg";
import check from "../../assets/images/circle-wavy-check.svg";
import cap from "../../assets/images/graduation-cap.svg";
import card from "../../assets/images/identification-card.svg";
import users from "../../assets/images/users.svg";
import handshake from "../../assets/images/handshake.svg";
import "./Advantages.scss";
import { useTranslation } from "react-i18next";

function Advantages() {
  const { t } = useTranslation(["advantage"]);

  return (
    <section id={"advantages"} className="advantages">
      <div className="container">
        <h2 className="advantages__title text-center">{t("title")}</h2>
        <p className="advantages__text general-text text-center">{t("text")}</p>
        <ul className="advantages__list d-flex flex-wrap list-unstyled">
          <li className="advantages__item d-flex col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="advantages__img-box">
              <img src={user} alt="user" />
            </div>
            <div className="advantages__content general-text">
              {t("advOne")}
            </div>
          </li>
          <li className="advantages__item d-flex col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="advantages__img-box">
              <img src={check} alt="check" />
            </div>
            <div className="advantages__content general-text">
              {t("advTwo")}
            </div>
          </li>
          <li className="advantages__item d-flex col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="advantages__img-box">
              <img src={cap} alt="cap" />
            </div>
            <div className="advantages__content general-text">
              {t("advThree")}
            </div>
          </li>
          <li className="advantages__item d-flex col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="advantages__img-box">
              <img src={card} alt="card" />
            </div>
            <div className="advantages__content general-text">
              {t("advFour")}
            </div>
          </li>
          <li className="advantages__item d-flex col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="advantages__img-box">
              <img src={users} alt="users" />
            </div>
            <div className="advantages__content general-text">
              {t("advFive")}
            </div>
          </li>
          <li className="advantages__item d-flex col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="advantages__img-box">
              <img src={handshake} alt="handshake" />
            </div>
            <div className="advantages__content general-text">
              {t("advSix")}
            </div>
          </li>
        </ul>
        <div className="w-100 d-flex">
          <button className="general-btn advantages__btn mt-5">
            {t("enroll")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
