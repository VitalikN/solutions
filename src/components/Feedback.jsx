import feedback from "../../feedback.json";
import styles from "../sass/layouts/feedback.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCube, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Feedback = () => {
  return (
    <div className={styles.container} id="feedback">
      <section className={styles.feedback}>
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {feedback.map((review, index) => (
            <SwiperSlide key={index}>
              <div className={styles.feedback__wrap} key={index}>
                <h3 className={styles.feedback__review__title}>
                  {review.title}
                </h3>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Feedback;
