import React from 'react'
import styles from './TopPage.module.css'
import people from '../../images/illustration-intro.png'
import Button from '../Button/Button'


const TopPage = () => {
  return (
    <div className={styles.wrapper}>
        <img src={people}/>
        <h1 className={styles.head}>Nauczymy Cię bla bla bla!</h1>
        <h2 className={styles.body}>Kliknij przycisk i zacznij z nami przygodę. Pewnie dalej nie czytasz, ale jeśli to wiedz, że wszystkiego Cie nauczymy!</h2>
      <Button text='ZACZYNAJMY!'></Button>
    </div>
  )
}

export default TopPage
