'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; obj는 key와 value의 집합체이다

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax (Object에서 정의한 constructor 호출)
const ellie = {
    name: 'ellie',
    age: 4
};

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later (뒤늦게 프로퍼티를 추가할 수 있음)
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later (뒤늦게 프로퍼티를 삭제할 수도 있음)
delete ellie.hasJob;
console.log(ellie.hasJob); // undefined


// 2. Computed properties (계산된 프로퍼티)
// !!key should be always string!!
console.log(ellie.name);
// 코딩하는 순간 그 키에 해당하는 값을 받아오고 싶을 때 사용
console.log(ellie['name']); // obj 안의 변수의 이름으로도 접근 가능 = computed properties
// 정확히 어떤 키가 필요한지 모를 때 (키가 runtime에서 결정될 때) 사용 
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// example
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name'); // ellie
printValue(ellie, 'age'); // 4


// 3. Property value shorthand (단축 속성명)
// https://pro-self-studier.tistory.com/33
// 객체를 정의 할 때 객체의 key값과 value의 값이 같으면, key와 value값을 각각 표기하지 않고 한 번만 표기하는 것
const person1 = {
    name: 'bob',
    age: 2
};
const person2 = {
    name: 'steve',
    age: 3
};
const person3 = {
    name: 'dave',
    age: 4
};
const person4 = new Person('elile', 30);
console.log(person4);


// 4. Constructor Function = obj의 템플릿 같은 함수
// class의 대체제로 사용됨
// 이름을 대문자로 시작하게끔 만들고 class의 constructor처럼 사용
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
    // 알아서 obj를 만들어줌 (object를 return)
}


// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); // T
console.log('age' in ellie); // T
console.log('random' in ellie); // F
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
// obj인 ellie 안에 있는 모든 키들이 let key에 할당됨
for (let key in ellie) {
    console.log(key);
}

// for (value of iterable)
// 배열 안의 값들이 let value에 할당됨
const array = [1, 2, 4, 5];
for (let value of array) {
    console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {
    name: 'ellie',
    age: '20'
};
const user2 = user; // user의 key-value값들이 저장된 reference가 user2에 할당 (얕은 복사)
user2.name = 'coder'; // ellie에서 corder로 name이 변경됨
console.log(user);

// 깊은 복사하는 방법
// 1. old way (루프를 이용해서 key-value를 새로 할당)
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
// console.clear();
console.log(user3);

const user4 = Object.assign({}, user); // 2. 메소드를 이용해서 obj 복사
console.log(user4);

// 2번의 another example
const fruit1 = {
    color: 'red'
};
const fruit2 = {
    color: 'blue',
    size: 'big'
};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue *더 나중에 복사된 값이 우선순위가 높음(덮어쓰기 되기 때문)*
console.log(mixed.size); // big