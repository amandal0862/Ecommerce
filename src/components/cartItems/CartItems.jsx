import React from "react";

import "./CartItem.css";

const CartItem = ({ item: { image, price, title, cartQuantity } }) => (
    <div className="cart-item">
        <img src={image} alt="item" />
        <div className="item-details">
            <span className="name">{title}</span>
            <span className="price">
                {cartQuantity} x ${price}
            </span>
        </div>
    </div>
);

export default CartItem;
