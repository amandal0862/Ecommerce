import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {addToCart, clearCart, decreaseCart, getTotals, removeFromCart,} from '../../features/cart/cartSlice'
import './CheckoutItem.css'

const CheckoutItem = ({ cartItem }) => {

    const {image, price, title, cartQuantity} = cartItem

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="checkout-item">
        <div className="image-container">
            <img src={image} alt="item" />
        </div>
        <span className="name">{title}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => handleDecreaseCart(cartItem)}>&#10094;</div>
                <span className="value">{cartQuantity}</span>
            <div className="arrow" onClick={() => handleAddToCart (cartItem)}>&#10095;</div>
        </span>
        <span className="price">${price}</span>
        <div className="remove-button" onClick={() => handleRemoveFromCart(cartItem)}>&#10005;</div>
    </div>
    )
}

export default CheckoutItem