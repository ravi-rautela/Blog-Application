import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./menupost.module.css";

const MenuPost = ({ withImages }) => {
  return (
    <>
      <div className={styles.items}>
        <Link href={"/"} className={styles.item}>
          {withImages && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor.orem ipsum dolor.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe </span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          {withImages && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor.orem ipsum dolor.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe </span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          {withImages && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor.orem ipsum dolor.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe </span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          {withImages && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor.orem ipsum dolor.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe </span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MenuPost;
