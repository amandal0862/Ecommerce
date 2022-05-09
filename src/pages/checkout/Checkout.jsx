import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getTotals} from "../../features/cart/cartSlice"
import CheckoutItem from '../../components/checkout/CheckoutItem.jsx'
import StripeCheckoutButton from '../../components/stripeButton/StrBtn'
import './checkout.css'

const Checkout = () => {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getTotals());
    // }, [cart, dispatch]);

    return (
        <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>  
        </div>
        {
            cart.cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
        }

        <div className="total">
            <span>TOTAL: ${cart.cartTotalAmount}</span>
        </div>
        <div className="test-warning">
            *Please use the folloiwng test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/25 - CVV:123
        </div>
        <StripeCheckoutButton price = {cart.cartTotalAmount} />
    </div>
    )
}

export default Checkout