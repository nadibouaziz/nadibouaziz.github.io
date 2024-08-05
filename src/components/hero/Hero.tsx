"use client";

import { useEffect, useRef } from "react";
import styles from "./hero.module.css";
import gsap from "gsap";
import Shapes from "./Shapes";

const Hero = () => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // create GSAP animations for name and jobTitle
      gsap
        .timeline()
        .fromTo(
          `.${styles.letterAnimation}`,
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "right bottom",
            delay: 0.5,
            stagger: { each: 0.1, from: "random" },
          },
        )
        .fromTo(
          `.${styles.jobTitle}`,
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          },
        );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  const renderLetters = (name: string, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`${styles.letterAnimation} letter-animation-${key}-index`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <section ref={component}>
      <div className={styles.container}>
        <Shapes />
        <div className={styles.information}>
          <h1 className={styles.fullName} aria-label="Nadi Bouaziz">
            <span className={styles.firstName}>
              {renderLetters("Nadi", "first")}
            </span>
            <span className={styles.lastName}>
              {renderLetters("Bouaziz", "last")}
            </span>
          </h1>
          <span className={styles.jobTitle}>software engineer</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
