import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router";
import Spinner from '../../components/spinner/Spinner.jsx'
import { Wrapper } from './ProductsLists-styles'
import {useGetAllProductsQuery } from './productAPI'
import Card from '../../components/card/Card.jsx'


export const ProductsList = () => {

    // const { items: products, status } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const { data, error, isLoading } = useGetAllProductsQuery();
    console.log("Api", isLoading);


    return (
        <Wrapper>
            {isLoading ? <Spinner /> : data && data?.map((product) => (<Card product={ product} key={product.id}/>))}
        </Wrapper>
    )

}