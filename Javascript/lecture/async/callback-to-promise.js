'use strict';

// Callback Hell example
class UserStorage {
    // id, pw를 받아서 로그인에 성공했다면 콜백 함수인 onSuccess를 사용자 데이터와 함께 호출
    // 로그인에 실패했다면 콜백 함수인 onError를 호출
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    // 사용자의 데이터를 받아서 사용자마다 가지고 있는 admin, guest 같은 역할들을
    // 서버에게 요청해서 정보를 받아오는 API라고 가정
    // 사용자의 역할을 잘 받아오면 onSuccess, 문제가 있다면 onError 호출
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({
                        name: 'ellie',
                        role: 'admin'
                    });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt("ID를 입력하세요");
const password = prompt("PW를 입력하세요");

userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);