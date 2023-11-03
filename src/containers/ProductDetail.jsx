import React from "react";
import ProductInfo from "@components/ProductInfo";
import "@styles/ProductDetail.scss";

import close from '@icons/icon_close.png';

const ProductDetail = () => {
    return(
        <aside id="productDetail" className="inactive">
            <div className="product-detail-close" id="close">
                <img src={close} alt="close"/>
            </div>
            <ProductInfo />
        </aside>
    );
}

export default ProductDetail;