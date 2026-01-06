import React from 'react'
import styles from './BodyP4.module.css'
import { Containercontent } from '../Containercontent'
import { Text } from '../text/text'

export const BodyP4: React.FC = () => {
  return (
    <div className={styles.bodyP4Container}>
      <Containercontent className={styles.bodyP4}>
        <div className={styles.mainContent}>
          <div className={styles.textbox}>
            <Text variant="h2" style={{ 
              color: 'white', 
              fontSize: 'clamp(32px, 6vw, 72px)', 
              fontWeight: '200',
              lineHeight: '1.2',
              marginBottom: '30px'
            }}>
              A pocket full of sunshine and a bowl full of fruits!
            </Text>
          </div>
          
            <div className={styles.imageContainer}>
              <img 
                src="https://raw.githubusercontent.com/Jose-IDO/my-react-app/refs/heads/production/src/assets/generated-image-1.png"
                alt="Fresh berries"
                className={styles.berryImage}
              />
          </div>
          <div className={styles.whiteboxcontent}>

                      <div className={styles.whitebox}>
                        <Text variant="h2" style={{ 
              color: 'black', 
              fontSize: '40px', 
              fontWeight: '700',
              lineHeight: '1.2',
              marginBottom: '30px',

            }}>
              Berries, whats their deal?
            </Text>

                                    <Text variant="h2" style={{ 
              color: 'black', 
              fontSize: '25px', 
              fontWeight: '350',
              lineHeight: '1.2',


            }}>
              want to learn what research is saying?
            </Text>

            <button className={styles.learnMoreBtn}>Click here!</button>

          </div>

          </div>


        </div>
        

      </Containercontent>
    </div>
  )
}

export default BodyP4