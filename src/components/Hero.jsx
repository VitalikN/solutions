import styles from "../sass/layouts/hero.module.scss";

import React, { useState, useEffect } from "react";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  const [dynamicHeight, setDynamicHeight] = useState(420);

  useEffect(() => {
    const handleResize = () => {
      const w = Math.min(window.innerWidth, 1280);

      const w1 = 768,
        h1 = 420;
      const w2 = 1280,
        h2 = 700;

      const calculatedHeight = h1 + ((w - w1) * (h2 - h1)) / (w2 - w1);
      setDynamicHeight(calculatedHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <section
        className={styles.section__hero}
        style={{ height: `${dynamicHeight}px` }}
      >
        <h1 className={styles.hero__title}>
          Easy, quality, IT - winning solutions for your business
        </h1>
        <Link href="#contacts">
          <Button
            label="Контакти"
            onClick={() => console.log("Button clicked!")}
            dataText="Контакти"
          />
        </Link>
      </section>
    </div>
  );
};

export default Hero;
