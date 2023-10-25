import React from "react"
import '../styles/ProductInfo.scss';

const ProductInfo = () => {
	return (
		<>
        <img  id="description-product-img"/>
        <div className="productInfo">
            <p className="showN"></p>
            <p className="showP"></p>
            <p className="showD">
            </p>
            <button className="primary-button add-to-cart-button">
                <img src="./icons/bt_add_to_cart.png" alt="add to cart"/>
                Add to cart
            </button>
        </div>
		</>
	);
}

export default ProductInfo;
