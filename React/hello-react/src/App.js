import React, { useRef, useState, useMemo, useCallback } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  // 배열도 불변성을 유지해야 한다.
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  // useRef로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않음
  // => 컴포넌트가 리렌더링 되어도 그 값이 계속 기억된다
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // 기존의 배열은 복사해서 넣어 불변성을 유지하면서 새로운 항목 추가
    // ... 연산자나 concat 활용
    // setUsers([...users, user])
    // setUsers(users.concat(user));
    // user 값이 바뀔 때마다 리렌더링되는 것을 방지하기 위해 user 값을 바로 받아오는 게 아니라
    // setUsers 함수를 이용해 설정
    setUsers((users) => users.concat(user));
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((id) => {
    // 컴포넌트가 처음 렌더링될 때 딱 한 번 만들어지고 계속해서 재사용됨
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  // 배열의 특정 요소만 업데이트하기
  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
