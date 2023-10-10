import Image from "next/image";
import Link from "next/link";

import styles from "../sass/layouts/header.module.scss";

import { useState, useEffect } from "react";
import ServicesList from "./ServicesList";

const Header = ({ onServiceSelect }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [menuOpen]);

  const handleBurgerMenuServiceSelect = (id) => {
    setMenuOpen(false);
    onServiceSelect(id);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__box}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/vnv.png"
              alt="vnv"
              width="90"
              height="90"
              priority={true}
            />
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__list__item}>
                <Link href="#services">Послуги</Link>
              </li>
              <li className={styles.nav__list__item}>
                <Link href="#">Проєкти</Link>
              </li>
              <li className={styles.nav__list__item}>
                <Link href="#">Часті запитання</Link>
              </li>
              <li className={styles.nav__list__item}>
                <Link href="#contacts">Контакти</Link>
              </li>
            </ul>
          </nav>
          <button
            className={`${styles.burger__button} ${
              menuOpen ? styles.spin : ""
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </button>
          <div
            //
            className={`${menuOpen ? styles.showMenu : ""} ${
              styles.box__showMenu
            }`}
          >
            <div
              className={`${
                menuOpen ? styles.showMenu__list : styles.hideMenu__list
              }`}
            >
              <ServicesList onServiceSelect={handleBurgerMenuServiceSelect} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
