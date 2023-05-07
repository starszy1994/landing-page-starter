import React from "react";
import styles from "./TopPage.module.css";
import people from "../../images/illustration-intro.png";
import Button from "../Button/Button";

const TopPage = () => {
  return (
    <div className={styles.wrapper}>
      <img src={people} />
      <h1 className={styles.head}>
        All your files in one secure location, accessible anywhere.
      </h1>
      <h2 className={styles.body}>
        Fylo stores all your most important files in one sceure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </h2>
      <Button text="Get Started!"></Button>
    </div>
  );
};

export default TopPage;
