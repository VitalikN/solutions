import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import styles from "../sass/layouts/contactForm.module.scss";
import Button from "./Button";
import { toast } from "react-toastify";
import Toastify from "./Toastify";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Мінімальна довжина - 2 символи")
    .required("Потрібно заповнити"),
  email: Yup.string()
    .email("Неправильний формат email")
    .required("Потрібно заповнити"),
  message: Yup.string()
    .min(5, "Мінімальна довжина - 5 символів")
    .required("Потрібно заповнити"),
});

const ContactForm = () => {
  const ErrorFeedback = ({ name }) => {
    return (
      <ErrorMessage name={name}>
        {(errorMessage) => <span className={styles.error}>{errorMessage}</span>}
      </ErrorMessage>
    );
  };
  const handleSubmit = (values, { resetForm }) => {
    toast.success(" Повідомлення надіслано!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    resetForm();
  };

  return (
    <div className={styles.contacts__container__form}>
      <h2 className={styles.contacts__title}>
        Маєте ідею? Розкажіть нам про неї
      </h2>
      <Toastify />
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.form__box}>
              <label className={styles.label} htmlFor="name">
                Ім`я:
              </label>

              <Field
                className={styles.input}
                type="text"
                name="name"
                id="name"
                error={touched.name && errors.name}
              />
              <ErrorFeedback name="name" />
            </div>
            <div className={styles.form__box}>
              <label className={styles.label} htmlFor="email">
                email:
              </label>

              <Field
                className={styles.input}
                type="email"
                name="email"
                id="email"
                error={touched.email && errors.email}
              />

              <ErrorFeedback name="email" />
            </div>
            <div className={styles.form__box}>
              <label className={styles.label} htmlFor="message">
                Повідомлення:
              </label>

              <Field
                className={styles.input}
                as="textarea"
                name="message"
                id="message"
                error={touched.message && errors.message}
              />

              <ErrorFeedback name="message" />
            </div>

            <Button
              label="Надіслати"
              type="submit"
              // onClick={() => console.log("Button clicked!")}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
//
