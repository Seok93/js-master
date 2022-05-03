// 조건문 (Confidional Statement)
// if(조건) { }
// if(조건) { } else {}
// if(조건1) { } else if(조건2) {} else {}

let fruit = 'orange';
if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('현재 과일은??');
}
// 조건이 참일 때에만 실행된다.
if (2 < 1) {
  console.log('출력되면 안돼!');
}
