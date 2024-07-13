import React, {useEffect, useState} from "react";


// 问题：布尔切换逻辑与当前组件耦合在一起，不方便使用
// 解决思路：自定义 hook

function useToggle() {
    // 可复用的代码逻辑
    const [value, setValue] = useState(true);

    const toggle = () => setValue(!value);
    // 哪些状态和回调函数需要在其他组件使用 return
    return {
        value,
        toggle
    }
}

function App() {

    const { value, toggle } = useToggle();

    return (
        <div className="App">
            {value && <div>this is div</div>}
            <button onClick={toggle}>toggle</button>
        </div>
    );
}

export default App;
