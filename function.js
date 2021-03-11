// Function
// - fundamental(기본적인) building block in the program
// - subprogram can be used multiple times
// - performs a task(하나의 태스크를 수행) or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing!!
// 함수 이름을 지을 때는: doSomething, command, verb (동사 사용)
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS (JS에서 함수는 객체로 간주된다.)
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value (value를 전달)
// object parameters: passed by reference (ref를 전달)
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {
    name: 'ellie'
};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    // message 파라미터가 비어있다면
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6) 파라미터로 들어온 값들을 배열 형태로 변환
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    // 조건이 맞지 않을 때 빨리 return으로 끝내버리기
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic... (필요한 로직은 뒤쪽에)
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression (함수 표현식)
// a function declaration (함수 선언식) can be called earlier than it is defiend. (hoisted)
// 함수 선언식은 호이스팅에 영향을 받는다.
// a function expression is created when the execution reaches it.
const print = function () {
    // anonymous function (익명 함수)
    console.log('print');
};
print();
const printAgain = print;
printAgain(); // print
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    // printYes, printNo가 callback 함수
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
// 함수 표현식
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions(재귀)
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 선언과 동시에 함수를 호출
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unkonwn command');
    }
}
console.log(calculate('add', 2, 3));