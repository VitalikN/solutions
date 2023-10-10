import Link from "next/link";
import services from "../../services.json";

import styles from "../sass/layouts/servicesList.module.scss";

import {
  FaFileAlt,
  FaFileInvoice,
  FaShoppingCart,
  FaSearch,
  FaComments,
} from "react-icons/fa";
const iconMap = {
  FaFileAlt: <FaFileAlt />,
  FaFileInvoice: <FaFileInvoice />,
  FaShoppingCart: <FaShoppingCart />,
  FaSearch: <FaSearch />,
  FaComments: <FaComments />,
};

const ServicesList = ({ onServiceSelect }) => {
  return (
    <ul className={styles.servicesList__list}>
      {services.map(({ id, title, icon }) => (
        <li
          className={styles.servicesList__list__item}
          key={id}
          onClick={() => onServiceSelect(id)}
        >
          <span className={styles.servicesList__list__icon}>
            {iconMap[icon]}
          </span>
          <Link
            className={`${styles.servicesList__link} `}
            href={`#service-${id}`}
          >
            <h3 className={styles.servicesList__title}>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
