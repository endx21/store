import React from "react";
import "../styles/Header.scss";

const Header = () =>{
    return(
        <nav>
            <img src="./icons/icon_menu.svg" alt="menu" className="menu"/>
        
            <div className="navbar-left">
            <img src="./logos/logo_store.png" alt="logo" className="logo"/>
        
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
            <img src="./icons/search.svg" alt="search"/>
        </span>
        <input className="" type="text"/>
        </div>
        
            <div className="navbar-right">
            <ul>
                <li className="navbar-email">user01@example.com</li>
                <li className="navbar-shopping-cart">
                <img src="./icons/icon_shopping_cart.png" alt="shopping cart"/>
                <div>3</div>
                </li>
            </ul>
            </div>
    </nav>
    );
}

export default Header;