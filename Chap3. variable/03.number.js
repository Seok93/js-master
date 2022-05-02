// JS의 모든 숫자는 실수로 처리된다.
let integer = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수
console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; //16진수
console.log(binary);
console.log(octal);
console.log(hex);

console.log(0 / 123); // 0
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / 'text'); // NaN (Not a Number)

// 새롭게 추가된 bigInt타입 2^53-1까지 표현 가능하단다..
let bigInt = 123546789012345678901234567890123456789n;
console.log(bigInt);
