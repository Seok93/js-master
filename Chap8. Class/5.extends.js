// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자!');
//   }
// }

// 공통된 속성을 추출하여 상위 클래스를 만들 수 있다.
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹는다!');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // 부모클래스인 Animal의 constructor에 책임 위임
    this.ownerName = ownerName;
  }
  // Animal의 eat 메소드를 덮어씌움 = 오버라이딩
  eat() {
    console.log('강아지는 사료 먹는다!');
  }
  play() {
    console.log('놀자아~!');
  }
}
const dog = new Dog('흰둥이');
console.log(dog);
dog.eat();
dog.sleep();
dog.play();
