import React from "react";
import '@styles/MenuMobile.scss';

import search from "@icons/search.svg";

const MenuMobile = () => {
    return(
        <div className="mobile-menu">
        <ul>
            <div className="searchMobile">
                <span className="search-iconMobile">
                    <img src={search} alt="search"/>
                </span>
                <input className="inputMobile" type="text"/>
            </div>
        <li>
            <a href="/">CATEGORIES</a>
        </li>
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
            <a href="/">Other</a>
        </li>
        </ul>
    
        <ul>
        <li>
            <a href="/">My orders</a>
        </li>
        <li>
            <a href="/">My account</a>
        </li>
        </ul>
    
        <ul>
        <li>
            <a href="/" className="email">user01@example.com</a>
        </li>
        <li>
            <a href="/" className="sign-out">Sign out</a>
        </li>
        </ul>
    </div>
    );
}

export default MenuMobile;