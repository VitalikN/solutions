import Link from "next/link";
import styles from "../sass/layouts/contacts.module.scss";

import { AiOutlineMail } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { FaWhatsapp, FaViber } from "react-icons/fa";
const Contacts = () => {
  return (
    <ul className={styles.contacts__list}>
      <li className={styles.contacts__list__item}>
        <Link
          className={styles.contacts__list__link}
          // href="mailto:team@vnv.solutions"
          href=" https://t.me/Vitalik202020"
        >
          <AiOutlineMail className={styles.contacts__list__icon} />
        </Link>
      </li>
      <li className={styles.contacts__list__item}>
        <Link
          className={styles.contacts__list__link}
          href=" https://t.me/Vitalik202020"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoTelegram className={styles.contacts__list__icon} />
        </Link>
      </li>
      <li className={styles.contacts__list__item}>
        <Link
          className={styles.contacts__list__link}
          href=" https://t.me/Vitalik202020"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className={styles.contacts__list__icon} />
        </Link>
      </li>
      <li className={styles.contacts__list__item}>
        <Link
          className={styles.contacts__list__link}
          href="https://t.me/Vitalik202020"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaViber className={styles.contacts__list__icon} />
        </Link>
      </li>
    </ul>
  );
};
export default Contacts;
