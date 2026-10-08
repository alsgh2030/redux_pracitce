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
      <button onClick={() => dispatch(addItem({ id: 1, name: "딸기" }))}>
        딸기 추가
      </button>
      <br></br>
      <button onClick={() => dispatch(addItem({ id: 2, name: "새우" }))}>
        새우 추가
      </button>
      <br></br>
      <button onClick={() => dispatch(addItem({ id: 3, name: "꽃게" }))}>
        꽃게 추가
      </button>
      <br></br>

      <button onClick={() => dispatch(clearItem())}>장바구니 비우기</button>

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
