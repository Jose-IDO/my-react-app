import React from 'react'
import { Containercontent } from '../Containercontent'
import styles from './body-p1.module.css'

export const BodyP1: React.FC = () => {
  return (
    <Containercontent className={styles.wholebodyp1}>
      <div className={styles.imageWrapper}>
        <img
          src="https://raw.githubusercontent.com/Jose-IDO/my-react-app/main/src/assets/fruitbowl2.png"
          alt="fruit bowl"
          className={styles.fruitbowl}
        />

        <div className={styles.textBox1}>South Africa's #1 online Summer Salad Store</div>
        <div className={styles.textBox2}>#Summers best Anti-ox Bowl</div>
        <div className={styles.textBox3}>want the recipe?</div>

        <button className={styles.button1}>Recipe</button>
      </div>
// 
    </Containercontent>
  )
}

export default BodyP1


