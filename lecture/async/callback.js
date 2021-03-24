'use strict';

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration (함수 선언식)
console.log('1');
setTimeout(() => console.log('2'), 1000); // 대표적인 async 예시 (브라우저 API)
console.log('3');


// Synchronous callback
// 동기적으로 실행되는 콜백함수
function printImmediately(print) {
    print();
}
printImmediately(() => console.log("hello "));


// Asynchronous callback
// 비동기적으로 실행되는 콜백함수 
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);


// Callback Hell example
class UserStorage {
    // id, pw를 받아서 로그인에 성공했다면 콜백 함수인 onSuccess를 사용자 데이터와 함께 호출
    // 로그인에 실패했다면 콜백 함수인 onError를 호출
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    // 사용자의 데이터를 받아서 사용자마다 가지고 있는 admin, guest 같은 역할들을
    // 서버에게 요청해서 정보를 받아오는 API라고 가정
    // 사용자의 역할을 잘 받아오면 onSuccess, 문제가 있다면 onError 호출
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({
                    name: 'ellie',
                    role: 'admin'
                });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt("ID를 입력하세요");
const password = prompt("PW를 입력하세요");

userStorage.loginUser(id, password, (user) => {
    userStorage.getRoles(user, (userWithRole) => {
        // 이 코드 블럭이 실행되려면 사용자 로그인 후 role까지 알맞게 받아와야 함
        alert(`안녕하세요. ${userWithRole.name}님. 당신은 ${userWithRole.role}입니다.`);
    }, error => console.log(error))
}, error => console.log(error));