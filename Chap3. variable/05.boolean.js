// 불리언 타입
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용 예: is를 통해 표현한다.
let isFree = true;
let isActivated = false;
let isEnrolled = false;
console.log(isFree);
console.log(isActivated);
console.log(isEnrolled);

console.clear();

// Falshy 거짓인 값: 6개만 외우면 된다. 원시 데이터의 없다에 해당하는 애들이 false가 나온다.
console.log('============= Falshy =============');
// not연산자(!)로 자동형변환을 하고, 이중 부정을 통해 원형의 참 거짓값을 출력
console.log(!!0);
console.log(!!-0);
console.log(!!NaN);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);

// Truthy 참인 값
console.log('============= Truthy =============');
console.log(!!1);
console.log(!!Infinity);
console.log(!!'text');
console.log(!!{});
console.log(!![]); // 빈 배열도 true를 반환함에 주의하자
