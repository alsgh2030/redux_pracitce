import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearItem } from "../redux/cartSlice";

const Cart = () => {
  // cart :{items:[]} 를 가지고 와서 items에 지정, 현재 items=[]
  // useSelector: store에 보관된 state에서 필요한 값을 읽어오는 hook
  const items = useSelector((state) => state.cart.items);
  // useDispatch: redux store에 "이런 일 해줘" 요청(액션) 보낼 수 있는 함수 꺼내주는 hook
  const dispatch = useDispatch(); // 액션을 store에 보내는 함수, 컴포넌트에서 dispatch 호출

  return (
    <div>
     <h1>할 일 목록</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onCanPlay={() => dispatch(removeItem(item.id))}
              style={{ marginLeft: "10px" }}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
