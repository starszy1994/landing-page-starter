import React from 'react';
import styles from './OpinionsMenu.module.css'

const OpinionsMenu = ({opinion, profile, name, position}) => {
  return (
    <div className={styles.size}>
      <div className={styles.ops}>
        <p>{opinion}</p>
        </div>
        <div className={styles.rest}>
        <img src={profile} className={styles.focia}/>
        <div className={styles.description}>
        <h5>{name}</h5>
        <p>{position}</p>
        </div>
    </div>
    </div>
  )
}

export default OpinionsMenu
