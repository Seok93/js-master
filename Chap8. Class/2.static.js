// static 프로퍼티와 메소드는 Class에게 존재하며, 메모리상에 1번만 올라간다.
// 또한 Class명을 이용하여 언제 어디서든 접근이 가능하다.
// 일반적인 프로퍼티와 메소드는 인스턴스별로 각자 가지고 있다.
class Fruit {
  // 클래스 레벨의 프로퍼티
  static MAX_FRUITS = 4;

  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display() {
    console.log(`${this.name}: ${this.emoji}`);
  }

  // 클래스 레벨의 메소드
  static makeRandomfruit() {
    // 클래스 레벨의 메소드에서는 this를 참조할 수 없음
    return new Fruit('banana', '🍌');
  }
}
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');
console.log(apple);
console.log(orange);

const banana = Fruit.makeRandomfruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);
