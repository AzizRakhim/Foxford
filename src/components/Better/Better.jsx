import React from "react";
import schedule from "../../assets/images/schedule.png";
import check from "../../assets/images/check.png";
import platform from "../../assets/images/platform.png";
import "./Better.scss";
import { useTranslation } from "react-i18next";

function Better() {
  const { t } = useTranslation(["better"]);

  return (
    <section className="better" id="better">
      <div className="container">
        <div className="better__container">
          <ul className="better__list list-unstyled p-0 m-0">
            <li className="better__item">
              <h3 className="better__list-title">{t("title")}</h3>
              <p className="better__text general-text pb-0">{t("text")}</p>
            </li>
            <li className="better__item">
              <div className="schedule__holder">
                <img src={schedule} alt="schedule" />
              </div>
              <h4 className="better__item-title">{t("convenient")}</h4>
            </li>
            <li className="better__item">
              <div className="check__holder">
                <img src={check} alt="check" />
              </div>
              <h4 className="better__item-title pl">{t("checked")}</h4>
            </li>
            <li className="better__item">
              <div className="platform__holder">
                <img src={platform} alt="platform" />
              </div>
              <h4 className="better__item-title">{t("modern")}</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Better;
