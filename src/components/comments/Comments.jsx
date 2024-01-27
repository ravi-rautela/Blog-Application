import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const status = "authenticated";
const Comments = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Commenets</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jhon Done</span>
              <span className={styles.date}>01.01.2033</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at
            debitis magnam esse unde, voluptate, accusantium earum labore
            voluptas minima corporis dolores ullam nostrum. Voluptate rerum nemo
            tempora maxime exercitationem.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jhon Done</span>
              <span className={styles.date}>01.01.2033</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at
            debitis 
            tempora maxime exercitationem.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jhon Done</span>
              <span className={styles.date}>01.01.2033</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at
            debitis magnam esse unde,
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jhon Done</span>
              <span className={styles.date}>01.01.2033</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at
            debitis magnam esse unde, voluptate, accusantium earum labore
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
