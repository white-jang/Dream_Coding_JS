import React from "react";

function Hello({color, name}) {
    // 비구조화 할당을 이용하면 props.name, props.color 이런 식으로
    // props.을 붙이지 않아도 props를 사용할 수 있음
    // props는 Object 형태로 넘어옴
    return <div style={{
        color
        // color: color와 동일함 
    }}>안녕하세요 {name}</div>;
}

Hello.defaultProps = {
    name: '이름없음'
}
  
export default Hello;