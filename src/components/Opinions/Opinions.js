import React from "react";
import styles from "./Opinions.module.css";
import profile1 from "../../images/profile-1.jpg";
import profile2 from "../../images/profile-2.jpg";
import profile3 from "../../images/profile-3.jpg";
import OpinionsMenu from "./OpinionsMenu";
import znacznik from "../../images/bg-quotes.png";

const Opinions = () => {
  return (
    <div className={styles.all}>
      <img src={znacznik} className={styles.obiekt} />
      <OpinionsMenu
        opinion={
          "Fylo has improved our team producitvity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        }
        profile={profile1}
        name="Satish Patel"
        position={"Founder & CEO, Huddle"}
      ></OpinionsMenu>
      <OpinionsMenu
        opinion={
          "Fylo has improved our team producitvity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        }
        profile={profile2}
        name="Bruce McKenzie"
        position={"Founder & CEO, Huddle"}
      ></OpinionsMenu>
      <OpinionsMenu
        opinion={
          "Fylo has improved our team producitvity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        }
        profile={profile3}
        name="Iva Boyd"
        position={"Founder & CEO, Huddle"}
      ></OpinionsMenu>
    </div>
  );
};

export default Opinions;
