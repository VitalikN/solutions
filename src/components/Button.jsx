import styles from "../sass/layouts/button.module.scss";

const Button = ({ label = "Button", onClick, type = "button", dataText }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={styles.hero__btn}
      data-text={dataText}
    >
      {label}
    </button>
  );
};

export default Button;
