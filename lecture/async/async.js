'use strict';

// async & await
// => Promise를 더 간편하게 쓸 수 있는 syntactic sugar
// clear style of using promise :)


// 1. async
async function fetchUser() {
    // async라는 키워드를 함수 앞에 쓰면 코드 블럭이 자동으로 Promise로 바뀐다.
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await
// await은 async 키워드가 붙은 함수 안에서만 쓸 수 있다.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    throw 'error';
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// 콜백 지옥...
// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     })
// }

// async, await을 이용하면 깔끔한 코드로 해결 가능
async function pickFruits() {
    // 이렇게 할 경우에 병렬적으로 실행하지 않아 apple (1초) + banana (1초) = 2초를 기다려야 실행됨
    // const apple = await getApple();
    // const banana = await getBanana();

    // 이렇게 Promise 객체를 먼저 만들어놓으면 병렬적 처리가 가능해서 1초 기다리면 실행됨
    // 이 경우엔 apple과 banana가 실행되는 순서가 상관이 없어야 함
    // 이 코드는 지저분하기 때문에 밑의 API를 사용하는 게 좋음!
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}


// 3. useful APIs ✨
function pickAllFruits() {
    // 모든 과일을 받아오고 싶다면...
    // Promise.all 을 이용하면 괄호 안의 함수에서 Promise 객체가 다 반환될 때까지 자동으로 기다려줌.
    return Promise.all([getApple(), getBanana()]).then(fruits =>
        fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    // 첫 번째의 과일만 받아오고 싶다면...
    // 배열의 함수들 중에서 가장 먼저 반환된 Promise만 가져옴 
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);