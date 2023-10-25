import React from "react";
import "../styles/ProductItem.scss";

const ProductItem = () => {
    return(
            <div className="product-card">
                <img src="https://cdn.shopify.com/s/files/1/1320/2227/products/GlacierJacket-Black-Main-RGB_1200x.jpg?v=1617065304" alt="Jacket"/>
                <div className="product-info">
                <div>
                    <p>$30,00</p>
                    <p>Glacier Jacket</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.png" alt=""/>
                </figure>
                </div>
            </div>
    );
}

export default ProductItem;