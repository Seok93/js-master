const x = 0;
const y = 0;
const coordinate = { x: x, y: y };
console.log(coordinate);

// key와 value의 변수명이 같은 경우 짧게 축약할 수 있다.
const short = { x, y };
console.log(short);

function makeObj(name, age) {
  return { name, age };
}
