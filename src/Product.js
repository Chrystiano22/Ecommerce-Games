import React from 'react'
import './Product.css'

function Product({ id, name, price, score, image }) {
    return (
        <div className="product">
            <div className="info">
                <p>{name}</p>
                <p className="price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="score">
                    {score}
                </div>

            </div>

            <img src={image} alt="" />
            <button>Add to Basket</button>
        </div>

    )

}

export default Product