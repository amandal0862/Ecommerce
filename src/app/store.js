import { configureStore } from "@reduxjs/toolkit";
import productReducer, {productsFetch } from "../features/products/productSlice.js"
import cartReducer, { getTotals } from '../features/cart/cartSlice.js'
import userReducer from '../features/user/userSlice.js'
import {productsApi} from '../features/products/productAPI.js'

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        user: userReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});


// store.dispatch(productsFetch());
store.dispatch(getTotals());

export default store;