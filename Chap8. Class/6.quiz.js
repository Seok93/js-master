// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

class Counter {
  #count;

  constructor(count) {
    if (isNaN(count) || count < 0) {
      this.#count = 0;
    } else {
      this.#count = count;
    }
  }
  increment() {
    this.#count += 1;
  }
  print() {
    console.log(this.#count);
  }
}
const counter = new Counter(0);
counter.print();
counter.increment();
counter.increment();
counter.increment();
counter.print();
