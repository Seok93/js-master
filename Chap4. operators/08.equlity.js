// 동등 비교 연산자 (Equlity Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘 다 같음
// !== 값과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 == '2');

console.log(2 == 3);
console.log(2 != 3);

console.log(2 === 2);
console.log(2 !== 2);
console.log(2 === '2'); // ✨ 타입과 값을 같이 비교하는게 좋다.

console.log(2 == '2');
console.log(true == 1);
console.log(true == 0);

console.clear();

const obj1 = {
  name: 'js',
};

const obj2 = {
  name: 'js',
};
console.log(obj1 == obj2);
console.log(obj1 === obj2);

console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

const obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);
