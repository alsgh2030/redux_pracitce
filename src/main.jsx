import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './index.css'
import { Provider } from "react-redux";
import store from "./redux/store.js";

// 모든 컴포넌트가 store 쓸 수 있게 해줌
createRoot(document.getElementById("root")).render(
    <Provider store={store}> {/* react가 제공하는 Provider로 묶어줌, 최상위인 main.jsx에 제공해야만 store 사용 가능 */}
        <App />
    </Provider>
);

//export할 때, default가 아니면 import할 때 {컴포넌트}로 받아와야함
//default면, import 컴포넌트 from

//default export : 파일하나에 컴포넌트 하나가 대응될 때 -> default 사용
//named export : 한 파일에 여러개 내보낼 때 (최근 트렌드)
