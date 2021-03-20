'use strict';

// Array🎉

// 1. Declaration 배열의 선언 방법 2가지
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.clear();


// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach (value, index, array전체를 프로퍼티로 받을 수 있음)
fruits.forEach((fruit) => console.log(fruit)); // arrow function은 한 줄일 때 block 생략 가능 


// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// pop, push는 맨 끝, 즉 고정된 위치에 삽입/삭제하므로 다른 값들의 이동이 없음
// shift, unshift는 맨 앞에 값을 삽입/삭제하기 위해 다른 값들을 이동시킴
// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1); // 시작하는 위치, 지우는 개수
// 지우는 개수는 optional인데, 위치만 넣으면 그 위치 빼고 모든 값을 지움
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉'); // 새로운 값을 넣는 것도 가능
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// indexOf: find the index 
// 가장 첫 번째로 만난 값
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥')); // 해당 값이 없으면 -1

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf
// 가장 마지막으로 만난 값
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🥥'));