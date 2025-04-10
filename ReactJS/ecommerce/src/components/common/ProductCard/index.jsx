import React from 'react'
import styles from './styles.module.css'
export const ProductCard = ({title, price, image }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt="" />
            <p className= {styles.title} >{title}</p>
            <p className={`${styles.title} ${styles.price}`}>Price: {price}</p>
        </div>
    )
}