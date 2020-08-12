import React, { useState, useEffect } from "react";
import styles from "./nav.module.css";
import classNames from "classnames";

function Nav() {
  const [show, setshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshow(true);
      } else setshow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={show ? styles.nav_bar_motion : styles.nav_bar}>
      <img
        className={styles.nav_logo}
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="NETFLIX"
      />
      <img
        className={styles.nav_avatar}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Twemoji12_1f465.svg/48px-Twemoji12_1f465.svg.png"
        alt="..."
      ></img>
    </div>
  );
}
export default Nav;
