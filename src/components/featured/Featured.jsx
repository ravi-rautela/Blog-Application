import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="styles.container">
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey, I am ravi here!</b> You can discover my
        story and blogs here.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
            quasi?
          </h1>
          <p className={styles.postDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            dolorum voluptatibus ipsam voluptatum at labore non? Eos autem modi
            impedit quasi cumque! Quis quam consequatur id nam magnam modi
            exercitationem!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
