import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src={"/astronaut.png"}
            alt="astronaut"
            fill
            className={styles.bg}
          />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now !</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Take 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            eum id.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        {/* <div className={styles.bgContainer}>
          <Image src={"/astronaut.png"} alt="astronaut" fill />
        </div> */}
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now !</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Take 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            eum .
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
