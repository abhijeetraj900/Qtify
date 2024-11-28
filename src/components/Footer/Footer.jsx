import React from "react";
import styles from "./footer.module.css";
import image from "../../assets/hero.svg";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.imgCard}>
        <div className={styles.img}>
          <img src={image} alt="Song artwork" />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.songName}>Song Name</p>
          <p className={styles.albumName}>Album Name</p>
        </div>
      </div>
      <div className={styles.footerText}>
        <p>
          Designed by <span className={styles.highlight}>Abhijeet Raj</span> with Love ❤️
        </p>
      </div>
    </div>
  );
}

export default Footer;
