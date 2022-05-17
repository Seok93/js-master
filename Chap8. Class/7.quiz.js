// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원
class Employee {
  #department;
  #workTime;
  #name;
  #pay;

  constructor(name, department, workTime, pay) {
    this.#name = name;
    this.#department = department;
    this.#workTime = workTime;
    this.#pay = pay;
  }
  salary() {
    console.log(this.#pay * this.#workTime);
  }
}

class Permanent extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, workTime) {
    super(name, department, workTime, Permanent.PAY_RATE);
  }
}

class PartTime extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, workTime) {
    super(name, department, workTime, PartTime.PAY_RATE);
  }
}

const permanent = new Permanent('woo', 'FE', 30);
const partTime = new PartTime('woo', 'FE', 20);

permanent.salary();
partTime.salary();
