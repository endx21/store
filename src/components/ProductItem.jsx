import React, {useState} from "react";
import "@styles/ProductItem.scss";

import add from "@icons/bt_add_to_cart.png";

const ProductItem = ({product}) => {
    const [cart, setCart] = useState([]);

    const handleClick = () => {
        setCart([])
    }

    return(
            <div className="product-card">
                <img src={product.images[0]} alt={product.title}/>
                <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={handleClick}>
                    <img src={add} alt=""/>
                </figure>
                </div>
            </div>
    );
}

export default ProductItem;