'use strict';
// Object-oriendted programming = OOP
// class: template
// object: instance of a class

// JavaScript classes
//  - introduced in ES6 
// 클래스가 ES6에 도입되기 전에는 클래스를 정의하지 않고 바로 object를 만들었음
//  - syntactical sugar over prototype-based inheritance
// 기존에 존재하던 프로토타입을 베이스로 문법만 추가된 것 (=syntactical sugar)


// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and setters
// class의 fields들의 값이 설계한 논리에 맞도록 방어적으로 하기 위해 사용
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // 이렇게 할당하면 메모리의 값을 업데이트하는 것이 아니라 세터를 호출하게 됨
        // this.age 를 선언하면 자동으로 getter 호출
        // = age; 처럼 값을 할당하면 자동으로 setter 호출
        // => 그러므로 maximum call stack error가 발생
        // 이를 방지하기 위해서 _ 를 필드 이름 앞에 붙임
        // 이 클래스 안에 있는 변수는 총 3개 firstName, lastName, _age
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //   throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
        // age가 -1이 되는 것을 방지
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age); // 내부적으로 getter로 자동 접근


// 3. Fields (public, private)
// Too soon! 너무 최근에 추가되어 잘 쓰이지 않음
// beautify도 인식하지 못함 (자꾸 #가 fields 이름 앞에서 벗어남 ㅜㅜ)
// 2020. 04 기준 safari에서 지원 X 바벨 필수 사용
// 2021. 03 기준 크롬, 파이어폭스, 엣지 지원 safari는 일부 지원
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2 출력
console.log(experiment.privateField); // undefined


// 4. Static properties and methods
// Too soon!
// class 자체에 연결된 값을 만들려면 static을 사용하면 됨 (obj에서 접근 X undefined)
// => 이해가 좀 안 돼서... 찾아봐야 할 듯
// object에 상관 없이 공통적으로 클래스에서 사용하는 값은 static으로 설정하면 메모리 사용을 줄여줄 수 있음
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding


// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} // shape의 모든 값 상속
class Triangle extends Shape {
    // overriding
    draw() {
        super.draw();
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceOf (operate)
// 이 obj가 해당 클래스에서 만들어진 게 맞는지 확인 true, false를 반환
console.log(rectangle instanceof Rectangle); // T
console.log(triangle instanceof Rectangle); // F
console.log(triangle instanceof Triangle); // T
console.log(triangle instanceof Shape); // T
console.log(triangle instanceof Object); // T JS의 모든 obj는 Object를 상속한다
console.log(triangle.toString());

let obj = {
    value: 5
};

function change(value) {
    value.value = 7;
}
change(obj);
console.log(obj);