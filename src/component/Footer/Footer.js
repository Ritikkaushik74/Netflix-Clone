import React from "react";
import styles from "./footer.module.css";

function Footer() {
  const btnClick = () => {
    window.open("https://github.com/Ritikkaushik74");
  };
  return (
    <>
      {/* <div className={styles.brk}></div> */}
      <div className={styles.footer}>
        <ul className={styles.ul1}>
          <li>@2020</li>
        </ul>
        <ul className={styles.ul2}>
          <li>
            <img
              className={styles.imgs}
              onClick={btnClick}
              src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg"
              alt="Github"
            />
          </li>
          <li>
            <img
              className={styles.imgs}
              src="https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png"
              alt="Instagram"
            />
          </li>
        </ul>
      </div>
      <div className={styles.foot}>By Ritik Kaushik</div>
    </>
  );
}
export default Footer;
