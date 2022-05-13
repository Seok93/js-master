// 퀴즈!
// num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력하도록
// 1. if문
let num = Math.floor(Math.random() * 9 + 1);
console.log(num);

if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
}

// 2. 삼항연산자
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);
