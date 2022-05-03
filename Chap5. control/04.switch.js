// 조건문 (Conditional Statement)
// switch
// 이산적인 데이터의 조건문으로 사용할 때 좋다.
// 정해진 범위 안의 값에 대해 특정한 일을 해야하는 경우

// 0:월요일, 1:화요일 ... 6: 일요일
const week = { MON: 0, TUE: 1, WED: 2, THU: 3, FRI: 4, SAT: 5, SUN: 6 };
let today = 6;
let dayName;
// if문으로 만든다면.. 너무 머리가 아플 것이다...
if (today === week.MON) {
  dayName = '월';
} else if (today === week.TUE) {
  dayName = '화';
} else if (today === week.WED) {
  dayName = '수';
} else if (today === week.THU) {
  dayName = '목';
} else if (today === week.FRI) {
  dayName = '금';
} else if (today === week.SAT) {
  dayName = '토';
} else if (today === week.SUN) {
  dayName = '일';
} else {
  throw new Error('요일 설정이 잘못되었다.');
}
console.log(dayName);

// switch 문으로 만든다면!
switch (today) {
  case week.MON:
    dayName = '월';
    break;
  case week.TUE:
    dayName = '화';
    break;
  case week.WED:
    dayName = '수';
    break;
  case week.THU:
    dayName = '목';
    break;
  case week.FRI:
    dayName = '금';
    break;
  case week.SAT:
    dayName = '토';
    break;
  case week.SUN:
    dayName = '일';
    break;
  default:
    throw new Error('요일 설정이 잘못되었다.');
}
console.log(dayName);

// break를 하지 않고, 연달아 수행할 수도 있다
let condition = 'okay'; // okay, good ➔ 좋음!, bad ➔ skQma!
let text;
switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음!';
    break;
  case 'bad':
    text = '나쁨!';
    break;
}
console.log(text);
