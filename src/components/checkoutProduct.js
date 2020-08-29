import React from 'react'
import './checkoutProduct.css'
import {UseStateValue} from './StateProvider'

function checkoutProduct({id,title,image,price,rating}){

    console.log(id,title,image,price,rating)
    const [{basket}, dispatch] = UseStateValue();

    const removeFromBasket = ()=>{
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id: id,
        })

    }

    return (
        <div className="checkoutProduct">
            <img src={image} className="checoutProduct_image" />
            <div className="checkoutProduct_info">
                
            <p className="checkoutProduct_title">
                {title}
            </p>
            <small>$</small>
    <strong>{price}{id}</strong>
            <div className="checkoutProduct_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=>
                        (<p>🌟</p>)
                    )
                }
                </div>
                <button onClick={removeFromBasket} className="checkoutProduct_button">Remove from basket</button>
            </div>
            
        </div>
    )
}

export default checkoutProduct
