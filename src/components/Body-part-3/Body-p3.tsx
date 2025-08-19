import React from 'react'
import styles from './BodyP3.module.css'
import { Containercontent } from '../Containercontent'
import { Text } from '../text/text'
import { ProductGrid } from '../ProductGrid/ProductGrid'

export const BodyP3: React.FC = () => {
  return (
    <div className={styles.bodyP3Container}>
      <Containercontent className={styles.bodyP3}>
      
        <div className={styles.orangeBenefitSection}>
          <div className={styles.leftContent}>
            <div className={styles.orangeIcon}>
              <img 
                src="https://raw.githubusercontent.com/Jose-IDO/my-react-app/main/src/assets/fruitbowl2.png"
                alt="Orange slice"
                className={styles.orangeImage}
              />
            </div>
            <div className={styles.textContent}>
              <Text variant="h2" style={{ color: 'white', fontSize: 'clamp(24px, 4vw, 48px)', marginBottom: '15px' }}>
                Orange Benefit
              </Text>
              <Text variant="p" style={{ color: 'white', fontSize: 'clamp(14px, 2vw, 18px)', marginBottom: '20px' }}>
                Just regione seeds and summer in gelled quisquam.
              </Text>
              <button className={styles.learnMoreBtn}>Learn More</button>
            </div>
          </div>
          <div className={styles.rightContent}>
            <img 
              src="https://raw.githubusercontent.com/Jose-IDO/my-react-app/main/src/assets/coffeeandjuice.png"
              alt="Juicer with orange"
              className={styles.juicerImage}
            />
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid />
      </Containercontent>
    </div>
  )
}

export default BodyP3