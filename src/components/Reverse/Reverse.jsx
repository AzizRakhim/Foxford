import React from "react";
import "./Reverse.scss";
import improvement from "../../assets/images/improvement.png";
import tree from "../../assets/images/tree.png";
import { useTranslation } from "react-i18next";

function Reverse() {
  const { t } = useTranslation(["reverse"]);

  return (
    <section className="reverse" id="reverse">
      <div className="container">
        <ul className="reverse__list list-unstyled p-0 m-0">
          <li className="reverse__item d-flex align-items-center">
            <div className="reverse__img-box">
              <img src={improvement} alt="improvement" />
            </div>
            <div className="reverse__content">
              <h2 className="reverse__title">
                {t("improve")}{" "}
                <span className="reverse__title--pink">{t("years")}</span>
              </h2>
              <p className="general__text reverse__text">{t("improveText")}</p>
              <button className="general-btn reverse__btn">
                {t("home:start")}
              </button>
            </div>
          </li>
          <li className="reverse__item d-flex align-items-center">
            <div className="reverse__img-box">
              <img src={tree} alt="practice" />
            </div>
            <div className="reverse__content">
              <h2 className="reverse__title">
                {t("practice")}{" "}
                <span className="reverse__title--pink">{t("time")}</span>
              </h2>
              <p className="general__text">{t("practiceText")}</p>
              <button className="general-btn reverse__btn">
                {t("home:start")}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Reverse;
