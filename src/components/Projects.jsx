import Image from "next/image";
import styles from "../sass/layouts/projects.module.scss";
import Link from "next/link";
import projects from "../../projects.json";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCube, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Projects = () => {
  const [dynamicHeight, setDynamicHeight] = useState(420);
  const [dynamicWidth, setDynamicWidth] = useState(1280);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      const w0 = 320,
        h0 = 175;
      const w1 = 768,
        h1 = 420;
      const w2 = 1280,
        h2 = 700;

      let calculatedWidth, calculatedHeight;

      if (w <= w0) {
        calculatedWidth = 290; // для мобільних
        calculatedHeight = h0;
      } else if (w <= w1) {
        calculatedWidth = w; // лінійне масштабування між w0 і w1
        calculatedHeight = h0 + ((w - w0) * (h1 - h0)) / (w1 - w0);
      } else if (w <= w2) {
        calculatedWidth = w; // лінійне масштабування між w1 і w2
        calculatedHeight = h1 + ((w - w1) * (h2 - h1)) / (w2 - w1);
      } else {
        calculatedWidth = w2; // максимальний розмір
        calculatedHeight = h2;
      }

      setDynamicHeight(calculatedHeight);
      setDynamicWidth(calculatedWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container} id="projects">
      <section className={styles.project}>
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
          {projects.map((item, index) => (
            <SwiperSlide key={index}>
              <div key={index} className={styles.project__container}>
                <Link href={item.link} target="_blank" tabIndex="0">
                  <Image
                    className={styles.project__img}
                    src={item.image.src}
                    alt={item.image.alt}
                    width={dynamicWidth}
                    height={dynamicHeight}
                    priority={item.image.priority}
                  />
                </Link>

                <h2 className={styles.project__title}>{item.title}</h2>

                <p className={styles.project__text}>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Projects;
