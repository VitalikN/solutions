import Link from "next/link";
import styles from "../sass/layouts/network.module.scss";

import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTiktok } from "react-icons/bi";
const Network = () => {
  return (
    <ul className={styles.network__list}>
      <li>
        <Link
          href="https://www.instagram.com/l.l.vinni/"
          className={`${styles.network__list__link} ${styles.instagram}`}
          target="_blank"
        >
          <AiOutlineInstagram className={styles.network__list__icon} />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.facebook.com/people/VNV-Solutions"
          className={`${styles.network__list__link} ${styles.facebook}`}
          target="_blank"
        >
          <BiLogoFacebook className={styles.network__list__icon} />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.tiktok.com/@vnvsolutions"
          className={`${styles.network__list__link} ${styles.tiktok}`}
          target="_blank"
        >
          <BiLogoTiktok
            className={`${styles.network__list__icon} ${styles.icon__tiktok}`}
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/company/vnv-tech/"
          className={`${styles.network__list__link} ${styles.linkedin}`}
          target="_blank"
        >
          <AiOutlineLinkedin className={styles.network__list__icon} />
        </Link>
      </li>
    </ul>
  );
};
export default Network;
{
  /*  */
}
