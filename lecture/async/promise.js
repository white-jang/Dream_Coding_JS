'use-strict';

// Promise is a JavaScript object for asynchronous operation.
// Promise는 JS에 내장된 object로 비동기적 수행을 할 때 콜백함수 대신에 유용하게 쓸 수 있다.
// 1. State 2. Producer, Consumer를 중점으로 공부하면 된다.
// State: pending(operation 수행 중) -> fulfilled or rejected (수행 완료)
// Producer(원하는 기능을 수행해서 해당하는 데이터를 만들어내는 Promise 객체) vs Consumer (Producer가 만든 데이터를 소비하는)


// 1. Producer
// when new Promise is created, the executor runs automatically!!
const promise = new Promise((resolve, reject) => {
    // promise가 만들어지는 순간 executor가 실행되므로
    // 사용자가 버튼을 누른 뒤에 네트워크를 통해 어떤 데이터를 가져오는 식의 설계라면
    // 이 예제처럼 Promise를 사용하면 안 된다. (사용자가 버튼을 누르지도 않았는데 데이터를 받아오게 됨)
    // doing some heavy work (network, read files)
    console.log("doing something...");
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});


// 2. Consumers: then, catch, finally
promise // 체이닝... then도 Promise 객체를 반환하기 때문에 catch를 붙일 수 있음
    .then(value => {
        // resolve
        // then은 값을 전달받아도, Promise 객체를 전달받아도 실행 가능
        console.log(value);
    })
    .catch(error => {
        // error
        console.log(error);
    })
    .finally(() => {
        // 성공하든 실패하든 무조건 호출
        console.log("finally");
    });



// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));


// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

// getHen().then(hen => getEgg(hen)).then(egg => cook(egg)).then(meal => console.log(meal));
getHen().then(getEgg).then(cook).then(console.log).catch(console.log);