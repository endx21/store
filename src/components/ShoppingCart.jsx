import React from "react";
import "@styles/ShoppingCart.scss";

import close from "@icons/icon_close.png";

const ShoppingCart = () =>{
    return(
            <div className="shopping-cart">
                <figure>
                <img src="https://cdn.shopify.com/s/files/1/1320/2227/products/GlacierJacket-Black-Main-RGB_1200x.jpg?v=1617065304" alt="Jacket"/>
                </figure>
                <p>Glacier Jacket</p>
                <p>$30,00</p>
                <img src={close} alt="close"/>
            </div>
    );
}

export default ShoppingCart;
