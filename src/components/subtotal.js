import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {UseStateValue} from './StateProvider'
import {GetBasketTotal} from './reducer'

function subtotal() {
    const [{basket}, dispatch] = UseStateValue();


    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText = {(value)=>(
                <>
                <p>
                    Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" />This order contains everything you wanted
                </small>
                </>
            )}
            decimalScale = {2}
            value = {GetBasketTotal(basket)}
            displayType = {"text"}
            thousandSeparator = {true}
            prefix = {"$"} 
            
            
            />
            <button>Checkout</button>
        </div>
    )
}

export default subtotal
