import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  const { t } = useTranslation(["footer"]);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top d-flex">
          <div className="footer__info">
            <div className="footer__logo-box">
              <Link to={"/"} className="footer__logo-link">
                foxford
              </Link>
            </div>
            <p className="footer__text">
              {t("unlocked")} <br /> {t("unlockEnglish")}
            </p>
            <button className="footer__btn general-btn">{t("join")}</button>
          </div>
          <nav className="footer__nav">
            <h3 className="footer__list-title">{t("platform")}</h3>
            <ul className="footer__list list-unstyled p-0 m-0">
              <li className="footer__item">
                <a href="#" className="footer__item-link">
                  {t("overview")}
                </a>
              </li>
              <li className="footer__item">
                <a href={"#better"} className="footer__item-link">
                  {t("home:features")}
                </a>
              </li>
              <li className="footer__item">
                <a href={"#advantages"} className="footer__item-link">
                  {t("home:about")}
                </a>
              </li>
              <li className="footer__item">
                <a href={"#results"} className="footer__item-link">
                  {t("home:results")}
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer__div mr">
            <h3 className="footer__list-title">{t("help")}</h3>
            <ul className="footer__list list-unstyled p-0 m-0">
              <li className="footer__item">
                <a href={"#results"} className="footer__item-link">
                  {t("whatResults")}
                </a>
              </li>
              <li className="footer__item">
                <a href={"#contact"} className="footer__item-link">
                  {t("questions")}
                </a>
              </li>
              <li className="footer__item">
                <a href={"#location"} className="footer__item-link">
                  {t("located")}
                </a>
              </li>
              <li className="footer__item">
                <a href={"#plans"} className="footer__item-link">
                  {t("price")}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__div ml">
            <h3 className="footer__list-title">{t("contacts")}</h3>
            <ul className="footer__list list-unstyled p-0 m-0">
              <li className="footer__item">
                <a href={"tel:+998997906003"} className="footer__item-link">
                  +998 (99) 790-60-03
                </a>
              </li>
              <li className="footer__item">
                <Link to={"/overview"} className="footer__item-link">
                  {t("location:realStreet")} <br />
                  {t("location:yangikurgan")}, Namangan, 161201
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom d-flex justify-content-between">
          <div className="footer__rights">
            @FOXFORD 2015 - 2022. {t("rights")}
          </div>
          <div className="footer__social-links">
            <a
              href={"https://t.me/Foxford_time"}
              className="footer__social-btn"
            >
              <i className="bx bxl-telegram"></i>
              Telegram: @Foxford_time
            </a>
            <div className="footer__me">
              {t("creator")}{" "}
              <a
                href={"https://t.me/AzizRakhim_17"}
                className={"footer__me-colored"}
              >
                Aziz Rakhim
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
