import React from 'react';

function User({user}) {
    return ( 
        <div>
          <b>{user.username}</b> <span>({user.email})</span>
        </div>);
}

function UserList({users}) {
  return (
    <div>
        {
            // 웬만하면 key는 인덱스를 사용해서 만들지 않는 것이 좋다
            users.map(user => <User user={user} key={user.id}/>)
        }
    </div>
  );
}

export default UserList;