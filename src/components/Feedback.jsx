import feedback from "../../feedback.json";
import styles from "../sass/layouts/feedback.module.scss";

const Feedback = () => {
  return (
    <div className={styles.container}>
      <section className={styles.feedback}>
        {feedback.map((review, index) => (
          <div className={styles.feedback__wrap} key={index}>
            <h3 className={styles.feedback__review__title}>{review.title}</h3>
            <p className={styles.feedback__review__text}>{review.text}</p>
            <div className={styles.feedback__info__wrap}>
              <h3 className={styles.feedback__info__name}>{review.name}</h3>
              <p className={styles.feedback__info__date}>{review.date}</p>
            </div>
            <p className={styles.feedback__summary__title}>
              {review.summaryTitle}
            </p>
            <p className={styles.feedback__summary__text}>
              {review.summaryText}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Feedback;
