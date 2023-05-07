import React from "react";
import IconMenu from "./IconMenu";
import cardAccess from "../../images/icon-access-anywhere.svg";
import cardSeciurity from "../../images/icon-security.svg";
import cardCollaboration from "../../images/icon-collaboration.svg";
import cardAnyFile from "../../images/icon-any-file.svg";
import styles from "./Icon.module.css";

const Icon = () => {
  return (
    <div>
      <div className={styles.stylik}>
        <div className={styles.drugiStylik}>
          <IconMenu
            logo={cardAccess}
            title="Acces your files, anywhere"
            description={
              "The ability to use a smartphone, tablet, or computer to access yout account means your files follow you everwhere."
            }
          ></IconMenu>
        </div>
        <div className={styles.drugiStylik}>
          <IconMenu
            logo={cardSeciurity}
            title="Security you can trust"
            description={
              "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
            }
          ></IconMenu>
        </div>
        <div className={styles.drugiStylik}>
          <IconMenu
            logo={cardCollaboration}
            title="Real-time collaboration"
            description={
              "Securely share files and folders with friends, family and colleagues for live collaboration. No email attechments required."
            }
          ></IconMenu>
        </div>
        <div className={styles.drugiStylik}>
          <IconMenu
            logo={cardAnyFile}
            title="Store any type of file"
            description={
              "Whether you're sharing holidays photos of work documents, Fylo has you cover3ed allowing for all file types to be securely stored and shared."
            }
          ></IconMenu>
        </div>
      </div>
    </div>
  );
};

export default Icon;
