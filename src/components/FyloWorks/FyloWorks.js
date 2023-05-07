import React from "react";
import fyloWorks from "../../images/illustration-stay-productive.png";
import styles from "./FyloWorks.module.css";
import linkIcon from "../../images/favicon-32x32.png";

const FyloWorks = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={fyloWorks} />
      </div>
      <div>
        <h3>Stay productive, wherever you are</h3>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and collegues
          for live collaboration. No email attchements required.
        </p>
        <a target="_blank" href="https://www.youtube.com/watch?v=xm3YgoEiEDc">
          See how Fylo works <img className={styles.links} src={linkIcon} alt="Link"/>
        </a>
      </div>
    </div>
  );
};

export default FyloWorks;
