import ContactForm from "./ContactForm";
import Contacts from "./Contacts";
import Network from "./Network";

import styles from "../sass/layouts/contacts.module.scss";
import useScrollAnimation from "./useScrollAnimation";

const ContactContainer = () => {
  const [listRef, animate] = useScrollAnimation();

  return (
    <div className={`${styles.container} `} id="contacts" ref={listRef}>
      <div
        className={`${styles.contacts}   ${animate ? styles.animate : ""}`}
        ref={listRef}
      >
        <h2 className={styles.contacts__title}>Контакти</h2>
        <div
          className={`${styles.contacts__container}  ${
            animate ? styles.animate : ""
          }`}
        >
          <Contacts />

          <ContactForm />
          <Network />
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
