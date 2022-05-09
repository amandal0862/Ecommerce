import React from 'react'
import './Card.css'

import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {addToCart } from "../../features/cart/cartSlice"
import {itemAdded, increment} from '../../features/products/productSlice'

const Card = ({ product }) => {

    const { items: products, status } = useSelector((state) => state.products);
    
    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div class="container page-wrapper">
            <div class="page-inner">
                <div class="row">
                    <div class="el-wrapper">
                        <div class="box-up">
                            <img class="img" src={product.image} alt="Image not loaded"/>
                            <div class="img-info">
                                <div class="info-inner">
                                    <span class="p-name">{ product.title }</span>
                                    <span class="p-company">{ product.category}</span>
                                    <span class="p-desc">{ product.description}</span>
                                </div>
                            </div>
                        </div>

                        <div class="box-down" onClick={(e) => {e.preventDefault();
                        dispatch(addToCart(product));}}>
                            <div class="h-bg">
                                <div class="h-bg-inner"></div>
                            </div>

                            <a class="cart" href="">
                                <span class="price">${ product.price}</span>
                                <span class="add-to-cart">
                                    <span class="txt">Add in cart</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card