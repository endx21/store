import React from "react";
import "@styles/Header.scss";

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_store.png';
import search from "@icons/search.svg";
import shoppingCart from "@icons/icon_shopping_cart.png";

const Header = () =>{
    return(
        <nav>
            <img src={menu} alt="menu" className="menu"/>
        
            <div className="navbar-left">
            <img src={logo} alt="logo" className="logo-nav"/>
        
            <ul>
                <li>
                <a href="/">All</a>
                </li>
                <li>
                <a href="/">Clothes</a>
                </li>
                <li>
                <a href="/">Electronics</a>
                </li>
                <li>
                <a href="/">Furnitures</a>
                </li>
                <li>
                <a href="/">Toys</a>
                </li>
                <li>
                <a href="/">Others</a>
                </li>
            </ul>
        </div>
        <div className="search">
        <span className="search-icon">
            <img src={search} alt="search"/>
        </span>
        <input className="" type="text"/>
        </div>
        
            <div className="navbar-right">
            <ul>
                <li className="navbar-email">user01@example.com</li>
                <li className="navbar-shopping-cart">
                <img src={shoppingCart} alt="shopping cart"/>
                <div>3</div>
                </li>
            </ul>
            </div>
    </nav>
    );
}

export default Header;