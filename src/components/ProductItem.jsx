import React, {useContext} from "react";
import "@styles/ProductItem.scss";
import AppContext from "@context/AppContext";
import addCartImage from "@icons/bt_add_to_cart.png";
import addedCartImage from "@icons/bt_added_to_cart.png";

const ProductItem = ({product}) => {
    const { addToCart, removeFromCart, state } = useContext(AppContext);

    const handleClick = (item) => {
        itsProductAdded() ? removeFromCart(item) : addToCart(item);
    };

    const itsProductAdded = () => state.cart.some( (item) => item.id === product.id) ? true : false;

    return(
            <div className="product-card">
                <img src={product.images[0]} alt={product.title}/>
                <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    { itsProductAdded() ? (
                <img src={addedCartImage} alt="" />
                    ) : (
                <img src={addCartImage} alt="" />
                )}
                </figure>
                </div>
            </div>
    );
}

export default ProductItem;