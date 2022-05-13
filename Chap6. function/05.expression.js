// 함수 선언문 function name() {}
// 함수 표현식 const name = function() {};

// 표현식에 작성하는 함수는 익명함수를 사용함
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => {};
add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

// 생성자 함수 const object= new Function(); // 뒤 객체편에서 다룸

// 즉시 실행 함수 (IIFE, Immedicately-Invoked Function Expressions)
(function run() {
  console.log('달려!');
})();
