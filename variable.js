'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';

{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name); // 블럭 안에 선언되어 있으므로 접근 불가능
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top) = 어디에 선언했든 가장 위에 선언한 것처럼 올라가는 현상
// has no block scope
// var은 hoisting의 영향을 받음, block scope가 아님
{
    age = 4; // 변수 선언 전에도 사용 가능
    var age;
}
console.log(age); // 블럭 밖임에도 접근 가능

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);
// null과 undefined 같지 않다. null은 프로그래머의 의도대로 만들어짐.
// 그러나 null == undefined는 true임.

// symbol, create unique identifiers for objects
// symbol은 map과 같은 자료구조에서 식별자가 필요한 경우에 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true (for을 이용하면 같은 값으로 처리)
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // .description을 이용해 문자열로 변환해야 함

// object, real-life object, data structure
const ellie = {
    name: 'ellie',
    age: 20
};
ellie.age = 21; // object 안의 요소는 const가 아니므로 접근 가능

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));