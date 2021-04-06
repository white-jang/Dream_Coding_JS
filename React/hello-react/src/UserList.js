import React, { useEffect } from "react";

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id } = user;

  // useEffect(() => {
  //   // deps가 빈 배열이면 컴포넌트가 마운트될 때 실행
  //   console.log("컴포넌트가 화면에 나타남.");
  //   return () => {
  //     // cleanup 함수. 컴포넌트가 언마운트될 때 실행
  //     console.log("컴포넌트가 화면에서 사라짐");
  //   };
  // }, []);

  useEffect(() => {
    // user 값이 설정되거나(=마운트될 때) 업데이트될 때마다 실행
    console.log(user);
  }, [user]);

  return (
    <div>
      <b
        style={{ color: user.active ? "green" : "black", cursor: "pointer" }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {
        // 웬만하면 key는 인덱스를 사용해서 만들지 않는 것이 좋다
        users.map((user) => (
          <User
            user={user}
            key={user.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))
      }
    </div>
  );
}

export default React.memo(UserList);
