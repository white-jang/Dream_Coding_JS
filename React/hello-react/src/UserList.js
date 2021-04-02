import React from "react";

function User({ user, onRemove, onToggle }) {
  const { username, email, id } = user;
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
}

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

export default UserList;
