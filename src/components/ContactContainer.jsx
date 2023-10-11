import ContactForm from "./ContactForm";
import Contacts from "./Contacts";
import Network from "./Network";

import styles from "../sass/layouts/contacts.module.scss";

const ContactContainer = () => {
  return (
    <div className={styles.container} id="contacts">
      <div className={styles.contacts}>
        <h2 className={styles.contacts__title}>Контакти</h2>
        <div className={styles.contacts__container}>
          <Contacts />

          <ContactForm />
          <Network />
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
