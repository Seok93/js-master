// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// function Fruit(name, emoji) {
//   this.name = name;
//   this.emoji = emoji;
//   this.print = () => {
//     console.log(`${this.name}: ${this.emoji}`);
//   };
// }
// Fruit.prototype.display = function () {
//   console.log(`${this.name}: 🍎`);
// };

// 2. 클래스 ✨
class Fruit {
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  print = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };

  display() {
    console.log(`${this.name}: ${this.emoji}`);
  }
}

// apple, orange는 객체이며, Fruit의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');
console.log(apple);
console.log(orange);
