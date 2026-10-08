import { createSlice } from "@reduxjs/toolkit";

// 상태, 바꾸는 방법 만들어서 내보내는 파일
// reducer를 만들어서 export로 내보낸다 => 설계도

// cart(name) + addItem(reducer의 키값) => cart/addItem 으로 접근가능
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    // 상태 바꾸는 함수들 모아둔 곳
    // 2개: 추가할 상품 정보가 필요함
    addItem: (state, action) => {
      // state는 매개변수 이름(자유 지정)
      console.log("state :", JSON.parse(JSON.stringify(state)));
      console.log("action :", action);
      console.log(action.payload); // dispatch 에서 전달한 데이터
      console.log(action.type);

      state.items.push(action.payload);
    },
    // 2개: 삭제할 상품정보(id)가 필요함
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // 추가로 받을 값이 없고 그냥 비운다
    clearItem: (state) => {
      state.items = [];
    },
  },
});

// createSlice가 만들어주는 것: 액션 생성 함수들, reducer 함수
export const { addItem, removeItem, clearItem } = cartSlice.actions; // 액션 생성 함수 -> 컴포넌트에서 사용하려고

// reducer 3개를 합쳐서 전달 + initialState를 내부에 품고있음
export default cartSlice.reducer; // 위 reduces를 하나로 합친 reducer 함수 => store.js에서 등록
