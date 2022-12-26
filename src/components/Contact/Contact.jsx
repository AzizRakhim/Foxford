import React from "react";
import "./Contact.scss";
import logo from "../../assets/images/logo.jpg";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation(["contact"]);

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact__title text-center">{t("title")}</h2>
        <p className="contact__text general-text text-center">{t("text")}</p>
        <ul className="contact__list list-unstyled">
          <li className="contact__item col-6">
            <form action="/" className="contact__form">
              <div className="contact__input-holder">
                <input
                  type="text"
                  className="contact__input"
                  placeholder={t("name")}
                />
              </div>
              <div className="contact__input-holder">
                <input
                  type="text"
                  className="contact__input"
                  placeholder={t("surname")}
                />
              </div>
              <div className="contact__input-holder">
                <input
                  type="tel"
                  className="contact__input"
                  placeholder={t("tel")}
                />
              </div>
              <div className="contact__input-holder">
                <textarea
                  className="contact__input"
                  name="suggestions"
                  id="suggestions"
                  cols="30"
                  rows="3"
                  placeholder={t("textArea")}
                />
              </div>
              <button className="contact__btn">{t("send")}</button>
            </form>
            <p className="text-center contact__info">
              <i className="bx bx-info-circle"></i>
              {t("thirdParty")}
            </p>
          </li>
          <li className="contact__item col-6">
            <img src={logo} alt="Logo" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
