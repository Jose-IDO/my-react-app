import React from 'react'
import styles from './body-p2.module.css'
import { Containercontent } from '../Containercontent'

export const BodyP2: React.FC = () => {
  return (
    <Containercontent className={styles.bodyP2}>
      <div className={styles.innerContent}>

        <div >
          <img 
            src="https://raw.githubusercontent.com/Jose-IDO/my-react-app/main/src/assets/coffeeandjuice.png
" 
            alt="Fruit Square" 
            className={styles.fruitImage} 
          />
        </div>
                <div >
          <img 
            src="https://raw.githubusercontent.com/Jose-IDO/my-react-app/main/src/assets/coffeeandjuice.png
" 
            alt="Fruit Square" 
            className={styles.fruitImage} 
          />
        </div>
                <div >
          <img 
            src="https://raw.githubusercontent.com/Jose-IDO/my-react-app/main/src/assets/coffeeandjuice.png
" 
            alt="Fruit Square" 
            className={styles.fruitImage} 
          />
        </div>
        
      </div>
    </Containercontent>
  )
}

export default BodyP2
