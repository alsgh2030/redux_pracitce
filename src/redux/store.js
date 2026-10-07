import { configureStore } from "@reduxjs/toolkit";

// {cart: }
const store=configureStore({
    reducer:{
        // state이름 : state 담당하는 reducer
        cart:cartReducer,
    },
})

export default store;