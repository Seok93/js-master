// let과 const

// let: 재할당이 가능함 (변수)
let a = 1;
a = 2;

// const: 재할당이 불가능함 (상수)
// 한 번 값을 정하면 재할당이 불가능하다.
// 코드의 안정성을 높여준다.
const text = 'hello';
//text = 'hi'; // Error발생: TypeError: Assignment to constant variable.

// const의 활용
// 1. 상수
const MAX_FRUITS = 5;
const PI = 3.14;

// 2. 재할당 불가능한 상수
// 주의할점: const로 객체를 가질 경우에는 reference를 고정하는 것이지, 내부의 데이터들을 고정하는 것이 아니다.
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {} // Error 발생
