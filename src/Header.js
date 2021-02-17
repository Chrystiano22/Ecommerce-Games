import React from 'react'
import logo from './images/logo.jpg'
import './Header.css'
import { Link } from 'react-router-dom'
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket'


function Header() {
    return (
        <nav className="header">

            <img className="header_logo" alt="logo" src={logo} />
            <div className="header_search">

            </div>
            <div className="header_option">
                <span className="header_optionLineOne">Hello, Welcome</span>
            </div>
            <Link to="/checkout" className="header_basket">
            <div className="header_basket">
                <ShoppingBasketIcon/>
                <span className="header_basketCount">6</span>
            </div>
            </Link>
        </nav>
    )
}

export default Header