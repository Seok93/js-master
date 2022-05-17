// 접근제어자 - 캡슐화
// private(#), public(기본), protected
class Fruit {
  #type = '과일'; // 외부접근이 불가능한 private 프로퍼티
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 외부접근이 불가능한 private 메소드
  #display() {
    console.log(`${this.name}: ${this.emoji} ${this.#type}`);
  }
}
const apple = new Fruit('apple', '🍎');
console.log(apple);
apple.display();
