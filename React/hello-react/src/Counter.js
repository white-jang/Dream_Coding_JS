import React, {useState} from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        // setNumber(number + 1);
        // 직접적으로 number값에 접근하는 것보다 업데이트 함수를 이용하는게 최적화에 도움이 된다
        // prevNumber가 아니라 어떤 이름이어도 상관 없다
        setNumber((prevNumber) => prevNumber + 1); // 함수형 업데이트
    };

    const onDecrease = () => {
        setNumber((prevNumber) => prevNumber - 1);
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            {/* 함수를 호출하는 게 아니라 (onIncrease()) 함수 이름을 써줘야 함 */}
            {/* 함수를 호출하듯이 하면 렌더링될 때 호출되버림... */}
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;
