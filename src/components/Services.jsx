import React from "react";

import styles from "../sass/layouts/services.module.scss";

import servicesList from "../../servicesList.json";

import ServicesList from "./ServicesList";

const Services = ({ onServiceSelect, selectedItem }) => {
  return (
    <div className={styles.container}>
      <section id={`service-${selectedItem}`} className={styles.service}>
        <h2 className={styles.service__title}>Послуги</h2>
        <div className={styles.box__service}>
          <ServicesList onServiceSelect={onServiceSelect} />
          <ul className={styles.service__list}>
            {servicesList
              .filter(({ id }) => id === selectedItem)
              .map(
                ({
                  id,
                  title,
                  text,
                  subject,
                  icon1,
                  item1,
                  icon2,
                  item2,
                  icon3,
                  item3,
                }) => (
                  <li key={id} className={styles.service__list__item}>
                    <h3 className={styles.service__list__subject}>{title}</h3>
                    <p className={styles.service__list__text}>{text}</p>
                    <h3 className={styles.service__list__subject}>{subject}</h3>
                    <ul className={styles.service__listText}>
                      <li className={styles.service__listText__item}>
                        {icon1}
                        <p className={styles.service__list__text}>{item1}</p>
                      </li>
                      <li className={styles.service__listText__item}>
                        {icon2}
                        <p className={styles.service__list__text}>{item2}</p>
                      </li>
                      <li className={styles.service__listText__item}>
                        {icon3}
                        <p className={styles.service__list__text}>{item3}</p>
                      </li>
                    </ul>
                  </li>
                )
              )}
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Services;
