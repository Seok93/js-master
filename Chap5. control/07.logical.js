// 논리연산자 (Logical Operator)
// && 논리곱  그리고
// || 논리합  또는
// ! 부정(단항연산자에 나온 것)
// !! 불리언값으로 변환 (단항연산자 응용버전)

let num = 8;
if (num >= 0 && num < 9) {
  console.log('👍 ');
}

if (num >= 0 || num > 20) {
  console.log('👍 ');
}

if (num != 8) {
  console.log('🙏');
}

// && 논리곱
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// && 논리합
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// ! 부정
console.log(!true); // false
console.log(!!true); // true
