import React from 'react'

export const ProductCard = ({ title, price, image }) => {
    return (
        <div className="card">
            <img src={image} alt="" />
            <p className="title">{title}</p>
            <p className="price">{price}</p>
        </div>
    )
}

