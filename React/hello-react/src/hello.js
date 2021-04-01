import React from "react";

function Hello({color, name, isSpecial}) {
    // 비구조화 할당을 이용하면 props.name, props.color 이런 식으로
    // props.을 붙이지 않아도 props를 사용할 수 있음
    // props는 Object 형태로 넘어옴
    return (
        <div style={
            {
                color,
                // color: color와 동일함
            }
        }>
            {/* {isSpecial ? <b>*</b> : null} */}
            {/* 어떤 한 값이 true, false이냐를 판단하면 될 때는 3항 연산자보다는 &&로 처리하는 것이 간편 */}
            {/* true/false 값에 따라 넣어야 하는 컨텐츠가 달라진다면 3항 연산자를 쓰는 게 맞다 */}
            {
            isSpecial && <b>*</b>
        }
            안녕하세요 {name} </div>
    );
}

Hello.defaultProps = {
    name: "이름없음"
};

export default Hello;
