import React from 'react'
import Button from '../Button/Button';
import styles from './NewsletterMenu.module.css'

const NewsletterMenu = () => {
  return(
    <div className={styles.wrapper}>
    <div className={styles.title}>
        <h2>Get early access today</h2>
        <p>It only takes a minute to sign up and our starter tier is exttremely generous. Ifyou have any questions, our suport team would be happy to help you.</p>
    <div>
        <input className={styles.mail} placeholder="   123email@emgail.com"></input>
        <Button text='Get Started For Free' className={styles.btn1}></Button>
    </div>
    <div className={styles.info}>
        <label>Please enter a vaild email adress</label>
    </div>
    </div>
    </div>
    )
}

export default NewsletterMenu;