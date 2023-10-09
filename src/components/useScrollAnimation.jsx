import { useState, useEffect, useRef } from "react";

const useScrollAnimation = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    let observer;

    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setAnimate(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
        }
      );

      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return [ref, animate];
};

export default useScrollAnimation;
