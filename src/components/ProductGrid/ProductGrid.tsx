import React from 'react'
import styles from './ProductGrid.module.css'
import { Text } from '../text/text'

export const ProductGrid: React.FC = () => {
  const products = [
    {
      id: 1,
      image: "https://raw.githubusercontent.com/Jose-IDO/my-react-app/main/src/assets/fruitbowl2.png",
      title: "ARCU VOLUT PAT VITAE",
      subtitle: "Phasellus lorem",
      price: "$19,99, 90,99€"
    },
    {
      id: 2,
      image: "https://raw.githubusercontent.com/Jose-IDO/my-react-app/main/src/assets/coffeeandjuice.png",
      title: "ARCU VOLUT PAT VITAE",
      subtitle: "Oriente past brossa",
      price: "$19,99, 90,99€"
    },
    {
      id: 3,
      image: "https://raw.githubusercontent.com/Jose-IDO/my-react-app/main/src/assets/fruitbowl2.png",
      title: "SFINLY TUN DIEN ARD",
      subtitle: "Original sunteri",
      price: "$19,99, 90,99€"
    }
  ]

  return (
    <div className={styles.productGrid}>
      {products.map(product => (
        <div key={product.id} className={styles.productCard}>
          <div className={styles.imageContainer}>
            <img 
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
          </div>
          <div className={styles.productInfo}>
            <Text variant="h3" style={{ 
              color: 'white', 
              fontSize: 'clamp(12px, 2vw, 16px)', 
              fontWeight: 'bold',
              marginBottom: '5px'
            }}>
              {product.title}
            </Text>
            <Text variant="p" style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              fontSize: 'clamp(10px, 1.5vw, 14px)',
              marginBottom: '8px'
            }}>
              {product.subtitle}
            </Text>
            <Text variant="p" style={{ 
              color: 'white', 
              fontSize: 'clamp(10px, 1.5vw, 14px)',
              fontWeight: '600'
            }}>
              {product.price}
            </Text>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductGrid