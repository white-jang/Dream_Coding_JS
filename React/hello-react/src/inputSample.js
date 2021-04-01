import React, {useState, useRef} from "react";

function InputSample() {
    
    const [inputs, setInputs] = useState({
        name: "",
        nickname: ""
    });
    const nameInput = useRef();
    // inputs에서 값 추출
    const { name, nickname } = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs({
            // 불변성 유지... 불변성을 유지해주어야만 리액트 컴포넌트가 상태가 업데이트 되었음을 알 수 있음
            // 업데이트 감지에 따라 필요한 렌더링이 실행됨 
            ...inputs,
            [name]: value,
            // 객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 사용됨
        });
    }

    const onReset = () => {
        setInputs({
            name: "",
            nickname: "",
        });
        nameInput.current.focus();
    }

    return (
        <div>
            <input 
                name="name" 
                type="text" 
                placeholder="이름" 
                onChange={onChange}
                value={name} 
                ref={useRef}
            />
            <input 
                name="nickname" 
                type="text" 
                placeholder="닉네임" 
                onChange={onChange}
                value={nickname} 
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 :</b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;
