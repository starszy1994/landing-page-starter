import React from "react";
import IconMenu from "./IconMenu";
import cardAccess from "../../images/icon-access-anywhere.svg";
import cardSeciurity from "../../images/icon-security.svg";
import cardCollaboration from "../../images/icon-collaboration.svg";
import cardAnyFile from "../../images/icon-any-file.svg";
import styles from './Icon.module.css'

const Icon = () => {
  return (
    <div>
      <div className={styles.stylik}>
        <div className={styles.drugiStylik}>
          <IconMenu
            logo={cardAccess}
            title="Nagłówek wpisu"
            description={"Tutaj mamy bardziej obszerny opis wpisu"}
          ></IconMenu>
        </div>
        <div className={styles.drugiStylik}>
          <IconMenu
            logo={cardSeciurity}
            title="Nagłówek wpisu"
            description={"Tutaj mamy bardziej obszerny opis wpisu"}
          ></IconMenu>
        </div>
        <div className={styles.drugiStylik}>
          <IconMenu
            logo={cardCollaboration}
            title="Nagłówek wpisu"
            description={"Tutaj mamy bardziej obszerny opis wpisu"}
          ></IconMenu>
        </div>
        <div className={styles.drugiStylik}>
          <IconMenu
            logo={cardAnyFile}
            title="Nagłówek wpisu"
            description={"Tutaj mamy bardziej obszerny opis wpisu"}
          ></IconMenu>
        </div>
      </div>
    </div>
  );
};

export default Icon;
