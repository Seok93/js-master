// null, undefined
let variable;
console.log(variable); // undefined, (JS에 의해) 자동으로 값이 없음을 표시

variable = null;
console.log(variable); // null, 명시적으로 값이 없음을 표시

let activeItem; // 아직 화설화된 아이템이 있는지 없는지 모르는 상태!
activeItem = null; // 활성화된 아이템이 없는 상태!

console.log(typeof undefined);
console.log(typeof null); // null이 object라니! JS의 오류: bug임을 인식하지만, 수정할 수 없음
