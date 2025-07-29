import React from 'react'
import styles from './body-p2.module.css'
import { Containercontent } from '../Containercontent'

export const BodyP2: React.FC = () => {
  return (
    <Containercontent className={styles.bodyP2}>
      <div className={styles.leftside}>
        <h2 className={styles.juicevscoffee}>Juice Vs Coffee</h2>
        <p className={styles.subText}>what are the benefits and drawbacks, as a breakfast drink?</p>
        <button className={styles.learnButton}>Learn More</button>
      </div>

      <div className={styles.rightImage}>
        <img 
          src="https://raw.githubusercontent.com/Jose-IDO/my-react-app/main/src/assets/coffeeandjuice.png"
          alt="Coffee and Juice"
          className={styles.fruitImage}
        />
      </div>
    </Containercontent>
  )
}

export default BodyP2
