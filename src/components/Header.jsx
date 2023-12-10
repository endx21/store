import React, {useState, useContext} from "react";
import "@styles/Header.scss";
import MenuDesk from "@components/MenuDesktop.jsx";
import MenuMobile from "@components/MenuMobile.jsx";
import MyOrder from "@containers/MyOrder";
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_store.png';
import search from "@icons/search.svg";
import AppContext from "@context/AppContext";
import shoppingCart from "@icons/icon_shopping_cart.png";

const Header = () =>{
    const [toggle, setToggle] = useState(false);
    const [toggleMobile, setToggleMobile] = useState(false);


    const {state, setToggleOrders} = useContext(AppContext);

    const handleToggleOrders = () => {
        setToggleOrders(!state.toggleOrders);
        setToggle(false);
        setToggleMobile(false);
    }
    const handleToggle = () => {
        setToggle(!toggle);
        setToggleOrders(false);
        setToggleMobile(false);
    }
    const handleToggleM = () => {
        setToggleMobile(!toggleMobile);
        setToggle(false);
        setToggleOrders(false);
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
                <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
                <img src={shoppingCart} alt="shopping cart" />
                {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                </li>
            </ul>
            </div>
            {toggle && <MenuDesk />}
            {toggleMobile && <MenuMobile />}
            {state.toggleOrders && <MyOrder />}
    </nav>
    );
}

export default Header;