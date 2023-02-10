import React from 'react'
import styles from './Opinions.module.css'
import profile1 from '../../images/profile-1.jpg'
import profile2 from '../../images/profile-2.jpg'
import profile3 from '../../images/profile-3.jpg'
import OpinionsMenu from './OpinionsMenu'

const Opinions = () => {
  return (
    <div className={styles.all}>
    <OpinionsMenu
    opinion={"Przedstawiam pełny opis stanowiska, Przedstawiam pełny opis stanowiska, Przedstawiam pełny opis stanowiska."}
    profile={profile1}
    name="Satish Patel"
    position={"Founder & CEO, Huddle"}
></OpinionsMenu>
<OpinionsMenu
    opinion={"Przedstawiam pełny opis stanowiska, Przedstawiam pełny opis stanowiska, Przedstawiam pełny opis stanowiska."}
    profile={profile2}
    name="Bruce McKenzie"
    position={"Founder & CEO, Huddle"}
></OpinionsMenu>
<OpinionsMenu
    opinion={"Przedstawiam pełny opis stanowiska, Przedstawiam pełny opis stanowiska, Przedstawiam pełny opis stanowiska."}
    profile={profile3}
    name="Iva Boyd"
    position={"Founder & CEO, Huddle"}
></OpinionsMenu>
    </div>
  )
}

export default Opinions
