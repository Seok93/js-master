// 연산자 우선 순위
let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result);

result = a++ + b * 4;
console.log(result);

// () 괄호를 이용하여 우선순위를 높일 수 있다.
a = 2;
b = 3;
result = (a + b) * 4;
console.log(result);

// MDN 연산자 우선순위 참고
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
