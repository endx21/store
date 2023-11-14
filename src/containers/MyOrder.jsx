import React from "react";
import "@styles/MyOrder.scss";
import OrderItem from "@components/OrderItem";

import flechita from '@icons/flechita.svg';

const MyOrder = () => {
    return(
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				<OrderItem />
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$30.00</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
    );
}

export default MyOrder;