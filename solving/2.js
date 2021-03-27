// 백준 10871번 X보다 작은 수
// https://www.acmicpc.net/problem/10871
const str1 = "10 5".split(" ");
const str2 = "1 10 4 9 2 3 8 5 7 6".split(" ").map(Number);
const n = str1[0];
const x = str1[1];
let result = [];

for (const num of str2) {
    if (num < x)
        result.push(num);
}

console.log(result);