// 함수 내부에서 외로로부터 주어진 인자의 값을 변경하는 것은 💩
// 상태 변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야함✨
// 원시값 -값에 의한 복사
// 객체값 - 참조에 의한 복사
function display(num) {
  num = 5; // ❌ 외부로부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

// 잘못 된 예시
function displayObj(obj) {
  obj.name = 'Bob'; // ❌ 외부로부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
  console.log(obj);
}
const ellie = { name: 'Ellie' };
displayObj(ellie);
console.log(ellie);

function changeName(obj) {
  // 이름부터 변경하는 느낌을 주도록!
  return { ...obj, name: 'woo' }; // 변할 때는 새로운 오브젝트 만들기!
}
const test1 = {
  name: 'suk',
  age: 23,
  speak: function () {
    console.log(`${this.name} ${this.age}`);
  },
  info: {
    tel: '010-0000-0000',
    email: 'ooooo@naver.com',
  },
};
const test2 = changeName(test1);

console.log(test1 === test2);
console.log(test1.speak === test2.speak);

// 위의 방법은 얕은 복사네...
test1.info['money'] = 100;
console.log(test1.info);
console.log(test2.info);
