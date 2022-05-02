// 증가 & 감소 연산자 Increment & Decrement Operators

let a = 0;
console.log(a);

a++; // a = a + 1;
console.log(a);

a--; // a = a - 1;
console.log(a);

// 주의사항!
// a++ 후위 중가 연산자: 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 전위 증가 연산자: 값을 먼저 증가하고, 필요한 연산을 함
console.clear();

a = 0;
console.log(a);

let b = a++;
console.log(a, b);

a = 0;
let c = ++a;
console.log(a, c);

a = 0;
let d = a--;
console.log(a, d);

a = 0;
let e = --a;
console.log(a, e);
