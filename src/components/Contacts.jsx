import Link from "next/link";
import styles from "../sass/layouts/contacts.module.scss";
import ContactForm from "./ContactForm";

import { AiOutlineMail } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { FaWhatsapp, FaViber } from "react-icons/fa";
const Contacts = () => {
  return (
    <div className={styles.container}>
      <section className={styles.contacts}>
        <h2 className={styles.contacts__title}>Контакти</h2>

        <div className={styles.contacts__container}>
          <ul className={styles.contacts__list}>
            <li className={styles.contacts__list__item}>
              <Link
                className={styles.contacts__list__link}
                href="mailto:team@vnv.solutions"
              >
                <AiOutlineMail className={styles.contacts__list__icon} />
              </Link>
            </li>
            <li className={styles.contacts__list__item}>
              <Link
                className={styles.contacts__list__link}
                href="https://t.me/vnv_solutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoTelegram className={styles.contacts__list__icon} />
              </Link>
            </li>
            <li className={styles.contacts__list__item}>
              <Link
                className={styles.contacts__list__link}
                href="https://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className={styles.contacts__list__icon} />
              </Link>
            </li>
            <li className={styles.contacts__list__item}>
              <Link
                className={styles.contacts__list__link}
                href="viber://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaViber className={styles.contacts__list__icon} />
              </Link>
            </li>
          </ul>
          <h2 className={styles.contacts__title}>
            Маєте ідею? Розкажіть нам про неї
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};
export default Contacts;
