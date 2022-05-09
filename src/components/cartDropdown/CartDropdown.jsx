import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from '../cartItems/CartItems.jsx'
import './CartDropdown.css'

const CartDropdown = () => {
    const cart = useSelector((state) => state.cart);
    let navigate = useNavigate();


    return (
        <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cart.cartItems.length !== 0 ?
                cart.cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <button onClick={()=>navigate('/checkout')}>CHECKOUT</button>
    </div>
    )
}

export default CartDropdown