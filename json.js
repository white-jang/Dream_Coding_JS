'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']); // JSON의 규격 사항에 따라 ''에서 ""로 변환됨
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // 함수는 데이터가 아니기 때문에 JSON으로 변환되지 않음
    // Symbol 같은 JS에만 존재하는 데이터타입도 변환되지 않음
    jump: function () {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

// 원하는 프로퍼티만 JSON으로 변환할 수 있음
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

// callback 함수도 이용할 수 있음
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`); // 맨 처음엔 rabbit을 감싸는 최상위에 있는 Object가 반환됨
    return key === 'name' ? 'ellie' : value;
});
console.log(json);


// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
// reviver 함수 정의 가능
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // JSON에는 함수가 포함되지 않음

console.log(rabbit.birthDate.getDate());
// 47~50줄이 없다면...
console.log(obj.birthDate.getDate()); // error
// JSON으로 변경되면서 Date라는 object가 단순히 text로 바뀌었으므로 error 발생