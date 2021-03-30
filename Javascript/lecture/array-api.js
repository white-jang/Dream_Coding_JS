'use-strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const fruitsStr = fruits.join("");
    console.log(fruitsStr);
}
// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const fruitsArr = fruits.split(",");
    console.log(fruitsArr);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    // array.sort((a, b) => b - a);
    array.reverse();
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const newArr = array.splice(2, 4);
    console.log(newArr);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled === true);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    // some - 함수를 통과하는 어떤 요소가 배열에 있는지 테스트 
    // every - 배열의 모든 요소가 함수를 통과하는지 테스트
    const result = students.some((student) => student.score < 50);
    console.log(result);
}

// Q9. compute students average score 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
{
    const result = students.reduce(((prev, curr) => prev + curr.score), 0); // 초기값 0부터 시작
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map((student) => student.score).join(", ");
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map((student) => student.score).sort();
    console.log(result);
}