import React from 'react'
import fyloWorks from '../../images/illustration-stay-productive.png'
import styles from './FyloWorks.module.css'

const FyloWorks = () => {
  return (

    <div className={styles.wrapper}>
        <div>
        <img src={fyloWorks}/>
        </div>
        <div>
            <h3>Stay productive, wherever you are</h3>
            <p>Tutaj trochę szerszy opis tego co myślimy.</p>
            <p>A tutaj dokończenie naszej myśli, więc możesz przeczytać</p>
            <a target='_blank' href="https://www.youtube.com/watch?v=xm3YgoEiEDc">Kliknij po więcej!</a>
</div>
</div>
)
}

export default FyloWorks;