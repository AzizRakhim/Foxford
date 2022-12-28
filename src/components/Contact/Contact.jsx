import React, { useRef } from "react";
import "./Contact.scss";
import logo from "../../assets/images/logo.jpg";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

function Contact() {
  const { t } = useTranslation(["contact"]);

  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_shal8ho",
        "template_hcos0jr",
        form.current,
        "frw9wN4zpY-axT1k2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact__title text-center">{t("title")}</h2>
        <p className="contact__text general-text text-center">{t("text")}</p>

        <ul className="contact__list list-unstyled">
          <li className="contact__item col-6">
            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className="contact__form"
            >
              <div className="contact__input-holder">
                <input
                  type="text"
                  className={`contact__input ${
                    errors.name && "input__validation"
                  }`}
                  placeholder={t("name")}
                  {...register("name", { required: true })}
                />
              </div>
              <div className="contact__input-holder">
                <input
                  type="text"
                  className={`contact__input ${
                    errors.name && "input__validation"
                  }`}
                  placeholder={t("surname")}
                  {...register("surname", { required: true })}
                />
              </div>
              <div className="contact__input-holder">
                <input
                  type="tel"
                  className={`contact__input ${
                    errors.name && "input__validation"
                  }`}
                  placeholder={t("tel")}
                  {...register("tel", { required: true })}
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
                  {...register("suggestion")}
                />
              </div>
              <button type="submit" className="contact__btn">
                {t("send")}
              </button>
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
