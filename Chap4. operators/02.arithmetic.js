// 산술 연산자 (Arithmetic Operators)
// + 더하기
// - 빼기
// * 곱하기
// / 나누기
// % 나머지
// ** 지수(거듭제곱)

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2); // es7
console.log(Math.pow(5, 2)); // 과거 지수 방법

// + 연산자 주의점!
let text = '두개의' + '문자를' + '연결할 때에도 사용된다.';
console.log(text);
text = '1' + 1; // 숫자와 문자열을 더하면 문자열로 변환됨 (강제 형변환이 일어남)
console.log(text);
console.log(typeof text);
