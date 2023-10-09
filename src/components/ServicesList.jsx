import Link from "next/link";
import services from "../../services.json";

import styles from "../sass/layouts/servicesList.module.scss";

import { BsCardChecklist, BsGraphUpArrow } from "react-icons/bs";

const ServicesList = ({ onServiceSelect }) => {
  return (
    <ul className={styles.servicesList__list}>
      {services.map(({ id, title }) => (
        <li
          className={styles.servicesList__list__item}
          key={id}
          onClick={() => onServiceSelect(id)}
        >
          <BsGraphUpArrow className={styles.servicesList__list__icon} />
          <Link className={styles.servicesList__link} href={`#service-${id}`}>
            <h3 className={styles.servicesList__title}>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
