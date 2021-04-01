import React, {useRef} from "react";
import UserList from "./UserList";

function App() {
    const users = [
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
      }
    ];

    // useRef로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않음
    // => 컴포넌트가 리렌더링 되어도 그 값이 계속 기억된다
    const nextId = useRef(4);

    const onCreate = () => {
  
      nextId.current += 1;
    };

    return <UserList users={users}/>;
}

export default App;
