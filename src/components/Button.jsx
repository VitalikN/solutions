import styles from "../sass/layouts/button.module.scss";

const Button = ({ label = "Button", onClick, type = "button" }) => {
  return (
    <button onClick={onClick} type={type} className={styles.hero__btn}>
      {label}
    </button>
  );
};

export default Button;
