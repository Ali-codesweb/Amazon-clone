import React from 'react'
import "./header.css"
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import  {UseStateValue}  from './StateProvider'

function header() {

    const [{basket}] = UseStateValue();
    console.log(basket)


    return (
        <nav className="header">
            {/* Logo -> img */}
         <Link to="/">
        <img className="header_logo" 
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </Link>
            {/* Search-box */}
            <div className="header_search">
        <input type="text" className="header_searchInput"/>
        <SearchIcon className="header_searchIcon"/>
        </div>
            {/* Sign-up, returns and orders, cart */}
        <div className="header_nav">
            {/* 1st link */}
                <Link to="/login" className="header_link">
                <div className="header_option">
                <span className="header_optionLineOne">Hi Aliasgar</span>
                <span className="header_optionLineTwo">Sign in</span>
                </div>
                </Link>
            {/* 2nd link */}
            <Link to="/" className="header_link">
                <div className="header_option">
                <span className="header_optionLineOne">Return</span>
                <span className="header_optionLineTwo">Products</span>
                </div>
                </Link>
            {/* 3rd link */}
            <Link to="/" className="header_link">
                <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Prime</span>
                </div>
                </Link>
            <Link to="/checkout">
                <div className="header_basket">
                    <ShoppingBasketIcon className="header_shoppingBasketIcon"/>
    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span> 
                </div>
            </Link>
        
        </div>
        </nav>
    )
}

export default header
