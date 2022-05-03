// 반복문 (Loop Statement)
// while(조건) {}
// 조건이 false가 될때까지 {} 코드블록을 반복 실행

// while문
// 조건이 맞아야 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = true;
let i = 0;
while (isActive) {
  console.log('아직 살아있다!');

  // while 문을 빠져 나올 수 있도록 만드는 것은 중요하다!
  if (i === 10) break;
  i++;
}

// do while문
// 무조건 1번은 실행된다.
isActive = false;
do {
  console.log('아직 살아있다!');
} while (isActive);
