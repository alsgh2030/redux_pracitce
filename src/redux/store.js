import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// store.js: reducer를 등록해서 상태 보관소를 만드는 파일
// store 안에 state = {cart: {items:[]}}
// state 값은 configureStore가 실행될 때 store 내부에 보관하는 값
const store = configureStore({
  reducer: {
    // state이름 : state 담당하는 reducer
    cart: cartReducer, // cartSlice.js에 있는 reducers 함수
  },
});

console.log(store.getState());

export default store;

// cartSlice.js에서 export 하면 store.js에 등록한 후 store 만듦 -> 다른 컴포넌트에서 store의 값을 읽고 요청을 보낼 수 있음
