import React from 'react'
import styles from './BodyP4.module.css'
import { Containercontent } from '../Containercontent'
import { Text } from '../text/text'

export const BodyP4: React.FC = () => {
  return (
    <div className={styles.bodyP4Container}>
      <Containercontent className={styles.bodyP4}>
        <div className={styles.mainContent}>
          <div className={styles.leftSection}>
            <Text variant="h2" style={{ 
              color: 'white', 
              fontSize: 'clamp(32px, 6vw, 72px)', 
              fontWeight: '300',
              lineHeight: '1.2',
              marginBottom: '30px'
            }}>
              Just imagine seeds and summer in gell sunshine.
            </Text>
          </div>
          
          <div className={styles.rightSection}>
            <div className={styles.imageContainer}>
              <img 
                src="https://raw.githubusercontent.com/Jose-IDO/my-react-app/main/src/assets/fruitbowl2.png"
                alt="Fresh berries"
                className={styles.berryImage}
              />
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <div className={styles.helloCard}>
            <div className={styles.cardContent}>
              <div className={styles.berryBackground}>
                <img 
                  src="https://raw.githubusercontent.com/Jose-IDO/my-react-app/main/src/assets/fruitbowl2.png"
                  alt="Berry background"
                  className={styles.backgroundImage}
                />
              </div>
              <div className={styles.cardText}>
                <Text variant="h2" style={{ 
                  fontSize: 'clamp(24px, 4vw, 48px)', 
                  color: '#333',
                  fontWeight: 'bold'
                }}>
                  HELLO.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Containercontent>
    </div>
  )
}

export default BodyP4