import React, {useEffect, useState} from "react";
import ProductItem from "@components/ProductItem";
import "@styles/ProductList.scss";
import useGetProducts from "@hooks/useGetProducts";

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    console.log('a')
    const products = useGetProducts(API);
    console.log('b')
    console.log(products)
    return(
        <section className="main-container">
        <div className="cards-container">
            {products.map((product) => (<ProductItem product={product} key={product.id}/>))}
        </div>
        </section>
    );
}

export default ProductList;
