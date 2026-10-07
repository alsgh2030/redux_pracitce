import { createSlice } from "@reduxjs/toolkit";

// 상태, 바꾸는 방법 만들어서 내보내는 파일
// reducer를 만들어서 export로 내보낸다 => 설계도

// cart(name) + addItem(reducer의 키값) => cart/addItem 으로 접근가능
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {

    },
    removeItem: (state, action) => {

    },
    clearItem: (state) => {

    },
  },
});
