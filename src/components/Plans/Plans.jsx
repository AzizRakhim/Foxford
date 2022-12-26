import { useTranslation } from "react-i18next";
import "./Plans.scss";

function Plans() {
  const { t } = useTranslation(["plans"]);

  return (
    <section id="plans" className="plans">
      <div className="container">
        <h2 className="plans__title text-center">{t("plans")}</h2>
        <p className="plans__text general-text text-center">
          {t("description")}
        </p>
        <ul className="plans__list list-unstyled p-0 m-0">
          <li className="plans__item">
            <h3 className="plans__item-title">{t("kids")}</h3>
            <p className="plans__item-text general-text">{t("kidsText")}</p>
            <div className="plans__money-box">
              30$ <span className="plants__money-month">/3 {t("month")}</span>
            </div>
            <ul className="plants__item-list list-unstyled p-0 m-0">
              <li className="plants__item-item">{t("check")}</li>
              <li className="plants__item-item">{t("task")}</li>
              <li className="plants__item-item">{t("advice")}</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="general-btn plans__btn">
                {t("home:start")}
              </button>
            </div>
          </li>
          <li className="plans__item">
            <h3 className="plans__item-title">{t("general")}</h3>
            <p className="plans__item-text general-text">{t("generalText")}</p>
            <div className="plans__money-box">
              40$ <span className="plants__money-month">/3 {t("month")}</span>
            </div>
            <ul className="plants__item-list list-unstyled p-0 m-0">
              <li className="plants__item-item">{t("check")}</li>
              <li className="plants__item-item">{t("task")}</li>
              <li className="plants__item-item">{t("advice")}</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="general-btn plans__btn">
                {t("home:start")}
              </button>
            </div>
          </li>
          <li className="plans__item">
            <h3 className="plans__item-title">{t("academic")}</h3>
            <p className="plans__item-text general-text">{t("academicText")}</p>
            <div className="plans__money-box">
              50$ <span className="plants__money-month">/3 {t("month")}</span>
            </div>
            <ul className="plants__item-list list-unstyled p-0 m-0">
              <li className="plants__item-item">{t("check")}</li>
              <li className="plants__item-item">{t("task")}</li>
              <li className="plants__item-item">{t("advice")}</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="general-btn plans__btn">
                {t("home:start")}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Plans;
