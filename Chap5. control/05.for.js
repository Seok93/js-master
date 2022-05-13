// 반복문 (Loop Statement)
// for(변수선언문; 조건식; 증감식){ }
// 실행 순서:
// 1. 변수 선언문: 변수 초기화
// 2. 조건식의 값이 참이면 {} 코드 불럭 내용 실행
// 3. 증감식 수행
// 4. 조건식이 거짓이 될 때까지 2번과 3번을 반복 수행

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i += 2) {
  console.log(i);
}

// 이중 반복문
// 구구단 출력
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(i * j);
  }
}

// 무한루프
// for (;;) {
//   console.log('😋');
// }

// 반복문 제어: continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log('i가 드디어 10이 되었다!');
    // break;
    continue;
  }
  console.log(i);
}
