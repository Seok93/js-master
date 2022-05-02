// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; // 값 복사
console.log(`a: ${a}`);
console.log(`b: ${b}`);
b = 2;
console.log(`a: ${a}`);
console.log(`b: ${b}`);

// 객체 타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
  name: '사과',
};
let orange = apple; // 주소 복사
console.log(`apple: ${JSON.stringify(apple)}`);
console.log(`orange: ${JSON.stringify(orange)}`);
orange.name = '오렌지';
console.log(`apple: ${JSON.stringify(apple)}`);
console.log(`orange: ${JSON.stringify(orange)}`);
