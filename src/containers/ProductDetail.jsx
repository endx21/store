import React from "react";
import ProductInfo from "../components/ProductInfo";
import "../styles/ProductDetail.scss";

const ProductDetail = () => {
    return(
        <aside id="productDetail" className="inactive">
            <div className="product-detail-close" id="close">
                <img src="./icons/icon_close.png" alt="close"/>
            </div>
            <ProductInfo />
        </aside>
    );
}

export default ProductDetail;