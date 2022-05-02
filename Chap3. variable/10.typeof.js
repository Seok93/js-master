// JS is Dynamic language
// JS는 인터프리터 방식을 따르며, 보통 인터프리터 방식을 사용하는 언어는 동적언어가 많다.
// JS는 동적언어이다.
// 동적언어란 타입이 고정적이지 않고, 상황에 따라 변하는 것을 말한다. 아래의 예시 참고

// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123; // JS는 할당된 값에 따라 타입이 결정된다! (동적 언어)
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

// 결론: JS에도 타입이 있지만, 상황에 따라 유동적으로 변화하는 동적 언어이다!
// Dynamic, weakly typed programming language
