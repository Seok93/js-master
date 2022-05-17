// Object literal {key: value}
// new Object()
// Object.create();
// Key - String, Symbol, 숫자
// Value - 원시값, 객체 (함수)

let apple = {
  name: 'apple',
  'hello-bye': '💚', // 좋은 방법은 아니다. 가능함을 보일 뿐이다.
  0: 1,
  ['hello-hi']: '😋', // 좋은 방법은 아니다. 가능함을 보일 뿐이다.
};

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple['hello-hi']); // 대괄호 표기법 bracket notation

// 속성 추가
apple.emoji = '🍍';
console.log(apple.emoji);
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;
console.log(apple);
