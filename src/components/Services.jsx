import React from "react";

import styles from "../sass/layouts/services.module.scss";

import servicesList from "../../servicesList.json";

import ServicesList from "./ServicesList";

import {
  FaInfo,
  FaCubes,
  FaIdCard,
  FaCopy,
  FaBlog,
  FaTools,
  FaListUl,
  FaThList,
  FaClock,
  FaHandshake,
  FaChartLine,
  FaLightbulb,
  FaQuestionCircle,
} from "react-icons/fa";
import useScrollAnimation from "./useScrollAnimation";

const Services = ({ onServiceSelect, selectedItem }) => {
  const [listRef, animate] = useScrollAnimation();
  const iconMap = {
    FaInfo: <FaInfo />,
    FaCubes: <FaCubes />,
    FaIdCard: <FaIdCard />,
    FaCopy: <FaCopy />,
    FaBlog: <FaBlog />,
    FaTools: <FaTools />,
    FaListUl: <FaListUl />,
    FaThList: <FaThList />,
    FaClock: <FaClock />,
    FaHandshake: <FaHandshake />,
    FaChartLine: <FaChartLine />,
    FaLightbulb: <FaLightbulb />,

    FaQuestionCircle: <FaQuestionCircle />,
  };

  return (
    <div className={styles.container} id="services">
      <section
        id={`service-${selectedItem}`}
        className={`${styles.service} ${animate ? styles.animate : ""}`}
        ref={listRef}
      >
        <h2 className={styles.service__title}>Послуги</h2>
        <div
          className={`${styles.box__service} ${animate ? styles.animate : ""}`}
        >
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
                    <div className={styles.service__box__content}>
                      <h3 className={styles.service__list__subject}>{title}</h3>
                      <p className={styles.service__list__text}>{text}</p>
                      <h3
                        className={`${styles.service__list__subject} ${styles.service__subject}`}
                      >
                        {subject}
                      </h3>
                      <ul className={styles.service__listText}>
                        <li className={styles.service__listText__item}>
                          <span className={styles.service__list__icon}>
                           
                            {iconMap[icon1]}
                          </span>
                          <p className={styles.service__list__text}>{item1}</p>
                        </li>
                        <li className={styles.service__listText__item}>
                          <span className={styles.service__list__icon}>
                           
                            {iconMap[icon2]}
                          </span>
                          <p className={styles.service__list__text}>{item2}</p>
                        </li>
                        <li className={styles.service__listText__item}>
                          <span className={styles.service__list__icon}>
                           
                            {iconMap[icon3]}
                          </span>
                          <p className={styles.service__list__text}>{item3}</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                )
              )}
          </ul>
          <ServicesList onServiceSelect={onServiceSelect} />
        </div>
      </section>
    </div>
  );
};
export default Services;
