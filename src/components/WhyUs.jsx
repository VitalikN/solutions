import styles from "../sass/layouts/whyUs.module.scss";
import { MdWeb } from "react-icons/md";

import { FaUsers, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import { BsCardChecklist, BsGraphUpArrow } from "react-icons/bs";

import useScrollAnimation from "./useScrollAnimation";
import Link from "next/link";

const WhyUs = () => {
  const [listRef, animate] = useScrollAnimation();

  return (
    <div className={styles.container}>
      <section className={styles.section__whyUs}>
        <h2 className={styles.whyUs__title}>Ваші IT ідеї в надійних руках</h2>

        <ul
          className={`${styles.whyUs__list} ${animate ? styles.animate : ""}`}
          ref={listRef}
        >
          <li className={styles.whyUs__list__item}>
            <MdWeb className={styles.whyUs__list__icon} />
            <p className={styles.whyUs__list__text}>
              Ми створюємо WEB через непереможну стратегію та комплексні техніки
            </p>
          </li>
          <li className={styles.whyUs__list__item}>
            <FaUsers className={styles.whyUs__list__icon} />
            <p className={styles.whyUs__list__text}>
              Серцем нашої компанії є 3 співвласники. Вони піклуються про
              створення не просто звичайної компанії, а мотивованої та щасливої
              команди.
            </p>
          </li>
          <li className={styles.whyUs__list__item}>
            <FaLaptopCode className={styles.whyUs__list__icon} />

            <p className={styles.whyUs__list__text}>
              Ми кодуємо красиві та інтерактивні веб-сайти та електронну
              комерцію
            </p>
          </li>
          <li className={styles.whyUs__list__item}>
            <BsCardChecklist className={styles.whyUs__list__icon} />
            <p className={styles.whyUs__list__text}>
              Розумні стратегії, які звертаються до сучасного споживача
            </p>
          </li>
          <li className={styles.whyUs__list__item}>
            <BsGraphUpArrow className={styles.whyUs__list__icon} />

            <p className={styles.whyUs__list__text}>
              Ми створюємо досвід, щоб залучати та розширювати можливості
              клієнтів
            </p>
          </li>
          <li className={styles.whyUs__list__item}>
            <FaLightbulb className={styles.whyUs__list__icon} />
            <p className={styles.whyUs__list__text}>
              Перетворіть потенційних клієнтів на освічених клієнтів за
              допомогою складних технологій
            </p>
          </li>
        </ul>
        <Link href="#contacts" className={styles.hero__btn}>
          Замовити сайт
        </Link>
      </section>
    </div>
  );
};

export default WhyUs;
