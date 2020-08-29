import React from 'react'
import {UseStateValue} from './StateProvider'
import './checkout.css'
import CheckoutProduct from './checkoutProduct'
import Subtotal from './subtotal'

function checkout() {
    const [{basket}, dispatch] = UseStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_image" src="https://www.seoclerk.com/pics/trade2684-1KYOoJ1416509800.jpg"/>
            {
                basket?.length===0 ?(
                    <div>
                        <h1>Your basket is empty</h1>
                    </div>
                ) : (
                    <div>
                        <h1>Items in your basket</h1>
                        {basket.map(item =>(

                            <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price= {item.price}
                            rating ={item.rating}
                            
                            />
                        ))}
                        </div>
                        
                    
                )
            }
            </div>
            {basket.length>0 && (
            <div className="checkout_right">
                <h1>Subtotal</h1>
                <Subtotal />
            </div>    
            )}
        </div>
    )
}

export default checkout
