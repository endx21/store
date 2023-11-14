import React, {useState} from "react";
import "@styles/Header.scss";
import MenuDesk from "@components/MenuDesktop.jsx";
import MenuMobile from "@components/MenuMobile.jsx";
import MyOrder from "@containers/MyOrder";
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_store.png';
import search from "@icons/search.svg";
import shoppingCart from "@icons/icon_shopping_cart.png";

const Header = () =>{
    const [toggle, setToggle] = useState(false);
    const [toggleM, setToggleM] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }
    const handleToggleM = () => {
        setToggleM(!toggleM);
    }
    const handleToggleOrders = () => {
        setToggleOrders(!toggleOrders);
    }

    return(
        <nav>
            <img src={menu} alt="menu" className="menu"  onClick={handleToggleM}/>
        
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
                <li className="navbar-email" onClick={handleToggle}>user01@example.com</li>
                <li className="navbar-shopping-cart">
                <img src={shoppingCart} alt="shopping cart" onClick={handleToggleOrders}/>
                <div>3</div>
                </li>
            </ul>
            </div>
            {toggle && <MenuDesk />}
            {toggleM && <MenuMobile />}
            {toggleOrders && <MyOrder />}
    </nav>
    );
}

export default Header;