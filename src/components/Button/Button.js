import React from 'react'
import styles from './Button.module.css'

const Button = ({btn1, text}) => {
  return (
    <div>
      <button className={styles.btn1}>{text}</button>
    </div>
  );
};

export default Button;
